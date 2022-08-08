import {icons} from 'assets';
import React from 'react';
import {View, Text, TextInput, ViewStyle, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors, Fonts, Style} from 'styles';

interface InputProps {
  keyName?: string;
  title?: string;
  style?: ViewStyle;
  secure?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (keyName: string, value: string) => void;
}

export const Input = ({
  keyName,
  title,
  style,
  secure = false,
  disabled = false,
  placeholder = '',
  onChange,
}: InputProps) => {
  const [isShowPass, setShowPass] = React.useState<boolean>(false);
  const onPressEyeIcon = () => setShowPass(preState => !preState);
  const onChangeText = React.useCallback(
    _value => {
      onChange && keyName && onChange(keyName, _value);
    },
    [onChange, keyName],
  );
  return (
    <View style={[style]}>
      <Text style={[Fonts.t(12, Colors.blue[1], {wei: '600', b: 8})]}>
        {title}
      </Text>
      <View style={Style.con({direc: 'row'})}>
        <TextInput
          editable={!disabled}
          placeholder={placeholder}
          style={[Fonts.t(14, Colors.inactive.text), Style.con({flex: 1})]}
          clearButtonMode="while-editing"
          secureTextEntry={secure && !isShowPass}
          onChangeText={onChangeText}
        />
        {!!secure && (
          <TouchableOpacity
            style={Style.con({size: 20, cen: true, ml: 8})}
            onPress={onPressEyeIcon}>
            <FastImage
              style={Style.con({size: 16})}
              source={isShowPass ? icons.iconVisible : icons.iconInvisible}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={Style.con({h: 1, bg: Colors.gray[2], mt: 8})} />
    </View>
  );
};
