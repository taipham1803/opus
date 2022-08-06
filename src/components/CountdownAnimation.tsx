import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  runOnJS,
} from 'react-native-reanimated';
import {Colors, Fonts, Style} from 'styles';

interface CountdownAnimationProps {
  style?: ViewStyle;
  numberStyle?: TextStyle;
  onAnimationEnded?: () => void;
  description?: string;
  descriptionStyle?: TextStyle;
  countdownFrom?: number;
  stopCountOn?: number;
}

export const CountdownAnimation = ({
  style,
  numberStyle,
  onAnimationEnded,
  description,
  descriptionStyle,
  countdownFrom = 3,
  stopCountOn = 0,
}: CountdownAnimationProps) => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const [countDown, setCountDown] = React.useState<number>(countdownFrom);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scale: scale.value}],
    };
  }, []);

  const updateNumber = React.useCallback(() => {
    if (countDown > stopCountOn) {
      setCountDown(pre => pre - 1);
    }
  }, [countDown, stopCountOn]);

  const callbackEndAnimation = () => onAnimationEnded && onAnimationEnded();

  React.useEffect(() => {
    progress.value = withRepeat(
      withTiming(0, {duration: 1500}, (isFinished?: boolean) => {
        if (isFinished) {
          runOnJS(updateNumber)();
        }
      }),
      3,
      false,
      (isFinished?: boolean) => {
        if (isFinished) {
          runOnJS(callbackEndAnimation)();
        }
      },
    );
    scale.value = withRepeat(withTiming(15, {duration: 1500}), 3, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={Style.con({flex: 1, bg: Colors.primary})}>
      <View style={[Style.con({flex: 1, cen: true}), style]}>
        <Animated.Text
          style={[
            Fonts.t(21, Colors.black, {wei: '700'}),
            numberStyle,
            reanimatedStyle,
          ]}>
          {countDown}
        </Animated.Text>
      </View>
      {!!description && (
        <Text
          style={[
            Fonts.t(21, Colors.gray[1], {
              wei: '700',
              self: 'center',
              text: 'center',
              b: 44,
            }),
            descriptionStyle,
          ]}>
          {description}
        </Text>
      )}
    </View>
  );
};
