import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors, Fonts, Style} from 'styles';

export type ButtonAppearance =
  | 'primary'
  | 'secondary'
  | 'borderFull'
  | 'borderLess'
  | 'danger';

interface ButtonProps {
  title?: string;
  style?: ViewStyle[];
  appearance?: ButtonAppearance;
  disabled?: boolean;
  onPress?: () => void;
  borderWidth?: number;
}

export const getButtonAppearanceStyles = ({
  appearance = 'primary',
}: ButtonProps) => {
  const styles = [];

  if (appearance === 'primary') {
    styles.push(Style.con({bg: Colors.interactive.stroke}));
  } else if (appearance === 'secondary') {
    styles.push(Style.con({bg: Colors.tran}));
  } else if (appearance === 'borderFull') {
    styles.push(Style.con({bg: Colors.interactive.stroke, py: 6, bor: 99}));
  } else if (appearance === 'borderLess') {
    styles.push(Style.con({bg: Colors.interactive.stroke}));
    styles.push(Style.border({bor: 5, width: 0}));
  }

  return styles;
};

export const Button = ({
  title,
  style,
  appearance = 'primary',
  disabled = false,
  onPress = () => {},
  borderWidth = 2,
}: ButtonProps) => {
  const passedInProps = {
    appearance,
    disabled,
  };
  const appearanceStyles = getButtonAppearanceStyles(passedInProps);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Style.con({py: 14, cen: true}),
        Style.border({bor: 5, width: borderWidth, color: Colors.primary}),
        ...appearanceStyles,
        style,
      ]}>
      <Text style={Fonts.t(15, Colors.blue[2], {wei: '500'})}>{title}</Text>
    </TouchableOpacity>
  );
};
