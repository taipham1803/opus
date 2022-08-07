import React from 'react';
import {View, ViewStyle, FlatList, Text, TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';

import {Colors, Fonts, Style} from 'styles';
import {PopularCard} from './PopularCard';
import {PopularCity} from 'entity/popular';
import {icons} from 'assets';
import {Routes} from 'navigation';

interface PopularListProps {
  style?: ViewStyle;
  title?: string;
  showHeader?: boolean;
  data: PopularCity[];
  toFixedSalary?: number;
  contentStyle?: ViewStyle;
}

export const PopularList = ({
  data,
  title,
  style,
  showHeader = true,
  toFixedSalary = 2,
  contentStyle = {},
}: PopularListProps) => {
  const nav = useNavigation();
  const handlePressSeeAll = () => {
    nav.dispatch(CommonActions.navigate(Routes.PopularCities));
  };
  return (
    <View style={[Style.con({}), style]}>
      {!!showHeader && (
        <View
          style={Style.con({
            direc: 'row',
            items: 'center',
            justify: 'space-between',
            pt: 8,
            px: 16,
          })}>
          <Text style={Fonts.t(18, Colors.blue[2], {wei: '500'})}>
            {title ?? 'Popular cities'.toUpperCase()}
          </Text>
          <TouchableOpacity
            onPress={handlePressSeeAll}
            style={Style.con({size: 36, items: 'flex-end', justify: 'center'})}>
            <FastImage
              style={Style.con({size: 20})}
              source={icons.iconChevronSmall}
            />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={data}
        contentContainerStyle={[Style.con({p: 16}), contentStyle]}
        renderItem={({item}) => (
          <PopularCard item={item} toFixedSalary={toFixedSalary} />
        )}
      />
    </View>
  );
};
