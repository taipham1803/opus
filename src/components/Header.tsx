import {useNavigation} from '@react-navigation/core';
import {icons} from 'assets';
import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DrawerActions} from '@react-navigation/native';

import {Colors, Fonts, Style} from 'styles';

export type leftAppearance = 'back' | 'drawer';

interface HeaderProps {
  title?: string;
  titleUpperCase?: boolean;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  leftAppearance?: leftAppearance;
  onLeft?: () => void;
}

export const getIconLeftAppearance = (appearance: leftAppearance) => {
  if (appearance === 'back') {
    return icons.iconChevronLeft;
  } else if (appearance === 'drawer') {
    return icons.iconMenu;
  }
};

export const Header = ({
  title,
  titleUpperCase = true,
  titleStyle,
  style,
  leftAppearance,
}: HeaderProps) => {
  const nav = useNavigation();
  const onPressLeft = () => {
    if (leftAppearance === 'back') {
      nav.goBack();
    } else if (leftAppearance === 'drawer') {
      nav.dispatch(DrawerActions.toggleDrawer());
    }
  };
  return (
    <View
      style={[
        Style.con({direc: 'row', h: 44, items: 'center'}),
        Style.border({bbw: 1, color: Colors.gray.light}),
        style,
      ]}>
      <TouchableOpacity
        onPress={onPressLeft}
        style={Style.con({w: 60, pl: 12, justify: 'center'})}>
        {!!leftAppearance && (
          <FastImage
            style={Style.con({size: 24})}
            source={getIconLeftAppearance(leftAppearance)}
          />
        )}
      </TouchableOpacity>
      <View style={Style.con({flex: 1, cen: true})}>
        <Text
          style={[
            Fonts.t(15, Colors.blue[2], {wei: '700', text: 'center'}),
            titleStyle,
          ]}>
          {titleUpperCase ? title?.toUpperCase() : title}
        </Text>
      </View>
      <View style={Style.con({w: 60})} />
    </View>
  );
};
