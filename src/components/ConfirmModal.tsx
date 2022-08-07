import React from 'react';
import {Text, ViewStyle} from 'react-native';
import Modalbox from 'react-native-modalbox';
import {Colors, Fonts, Style} from 'styles';
import {Button} from './Button';

interface ConfirmModalProps {
  style?: ViewStyle;
  open: boolean;
  onClosed: () => void;
  modalHeight: number;
}

export const ConfirmModal = ({
  style,
  open,
  onClosed,
  modalHeight = 200,
}: ConfirmModalProps) => {
  return (
    <Modalbox
      style={[
        Style.con({
          w: '100%',
          h: modalHeight,
          over: 'hidden',
          bg: Colors.white,
          p: 20,
        }),
        Style.border({btlr: 16, btrr: 16}),
        style,
      ]}
      useNativeDriver={true}
      backdropPressToClose={true}
      backdropColor={'rgba(16, 15, 15, 0.7)'}
      animationDuration={500}
      backdrop={true}
      backButtonClose={true}
      isOpen={open}
      swipeToClose={true}
      position={'bottom'}
      coverScreen={true}
      onClosed={onClosed}>
      <Text style={Fonts.t(16, Colors.blue[1], {wei: '600'})}>
        {'Your request has been submitted'}
      </Text>
      <Text style={Fonts.t(14, Colors.blue[1], {t: 12})}>
        {'Your recruiter will contact you shortly.'}
      </Text>
      <Button
        title={'ok'.toUpperCase()}
        style={Style.con({mt: 24})}
        onPress={onClosed}
        appearance="borderLess"
      />
    </Modalbox>
  );
};
