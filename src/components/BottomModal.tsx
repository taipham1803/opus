import React from 'react';
import {StyleSheet, View, ViewStyle, Dimensions} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
  WithSpringConfig,
  WithTimingConfig,
} from 'react-native-reanimated';

const screen = Dimensions.get('screen');

export type BottomModalProps = {
  height: number;
  isOpen?: boolean;
  backdropColor?: string;
  style?: ViewStyle;
  animation?: 'spring' | 'timing';
  springConfig?: WithSpringConfig;
  timingConfig?: WithTimingConfig;
  backdropStyle?: ViewStyle;
  children: JSX.Element[];
};

export const BottomModal = ({
  height,
  isOpen,
  backdropColor,
  style,
  children,
  backdropStyle,
  animation,
  springConfig,
  timingConfig,
}: BottomModalProps) => {
  const topAnim = useSharedValue(screen.height);
  const isMounted = React.useRef<boolean>(false);

  const updateTop = React.useCallback(
    (value: number) => {
      'worklet';
      if (animation === 'spring') {
        return withSpring(value, springConfig);
      } else {
        return withTiming(value, timingConfig);
      }
    },
    [timingConfig, animation, springConfig],
  );

  React.useEffect(() => {
    if (isMounted.current) {
      console.log('isOpen: ' + isOpen);
      if (isOpen) {
        // topAnim.value = updateTop(screen.height);
        // topAnim.value = updateTop(screen.height - height);
      } else {
        // topAnim.value = updateTop(screen.height);
      }
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const isActive = useDerivedValue<boolean>(() => {
    if (topAnim.value > screen.height - 10) {
      return false;
    } else {
      return true;
    }
  }, [topAnim]);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {startHeight: number}
  >({
    onStart: (_, context) => {
      context.startHeight = topAnim.value;
    },
    onActive: (event, context) => {
      if (context.startHeight + event.translationY > screen.height - height) {
        topAnim.value = context.startHeight + event.translationY;
      }
    },
    onEnd: () => {
      if (topAnim.value > screen.height - height / 2) {
        topAnim.value = updateTop(screen.height);
      } else {
        topAnim.value = updateTop(screen.height - height);
      }
    },
  });

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    top: topAnim.value,
  }));

  const backdropAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      topAnim.value,
      [screen.height - height, screen.height],
      [1, 0],
    ),
    top: isActive.value ? 0 : screen.height,
  }));

  return (
    <View style={styles.fullScreen}>
      <Animated.View
        style={[
          styles.backdrop,
          {backgroundColor: backdropColor},
          backdropStyle,
          backdropAnimatedStyle,
        ]}
      />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[styles.container, {height}, style, containerAnimatedStyle]}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

BottomModal.defaultProps = {
  timingConfig: {duration: 300, easing: Easing.quad},
  animation: 'timing',
};

const styles = StyleSheet.create({
  fullScreen: {
    height: screen.height,
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: screen.width / 2,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    height: screen.height,
    width: screen.width,
  },
  container: {
    width: screen.width,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
