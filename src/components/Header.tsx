import {useNavigation} from '@react-navigation/core';
import {icons} from 'assets';
import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DrawerActions} from '@react-navigation/native';

import {Colors, Fonts, Style} from 'styles';

export type leftAppearance = 'back' | 'drawer';

interface HeaderProps {
  title?: string;
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

export const Header = ({title, style, leftAppearance}: HeaderProps) => {
  const nav = useNavigation();
  const onPressLeft = () => {
    if (leftAppearance === 'back') {
      nav.goBack();
    } else if (leftAppearance === 'drawer') {
      // nav.goBack();
      nav.dispatch(DrawerActions.toggleDrawer());
    }
  };
  return (
    <View
      style={[
        Style.con({direc: 'row', h: 44, items: 'center'}),
        Style.border({bbw: 1, color: Colors.gray[10]}),
        style,
      ]}>
      <TouchableOpacity
        onPress={onPressLeft}
        style={Style.con({w: 100, pl: 12})}>
        {!!leftAppearance && (
          <FastImage
            style={Style.con({size: 24})}
            source={getIconLeftAppearance(leftAppearance)}
          />
        )}
      </TouchableOpacity>
      <View style={Style.con({flex: 1, cen: true})}>
        <Text style={[Fonts.t(16, Colors.blue[2], {wei: '700'})]}>{title}</Text>
      </View>
      <View style={Style.con({w: 100})} />
    </View>
  );
};
