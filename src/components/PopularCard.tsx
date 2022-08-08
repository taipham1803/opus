import React from 'react';
import {View, Text, ViewStyle, TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';

import {Colors, Fonts, Style} from 'styles';
import {PopularCity} from 'entity/popular';
import {Routes} from 'navigation';

interface PopularCardProps {
  style?: ViewStyle;
  item: PopularCity;
  toFixedSalary: number;
}

export const PopularCard = ({
  style,
  item,
  toFixedSalary = 2,
}: PopularCardProps) => {
  const nav = useNavigation();
  const handlePressJobByCity = () => {
    nav.dispatch(CommonActions.navigate(Routes.SuggestedJobs, {city: item}));
  };
  return (
    <TouchableOpacity
      onPress={handlePressJobByCity}
      style={[
        Style.con({direc: 'row', mb: 8, minH: 80, over: 'hidden'}),
        Style.border({bor: 16, color: Colors.gray.light, width: 1}),
        style,
      ]}>
      <View style={Style.con({w: 96, cen: true})}>
        <FastImage style={Style.con({w: 96, h: 80})} source={item.city.image} />
      </View>
      <View style={Style.con({flex: 1, p: 12, justify: 'space-between'})}>
        <View style={Style.con({direc: 'row', items: 'flex-end'})}>
          <Text style={Fonts.t(16, Colors.blue[2], {wei: '600'})}>
            {item?.city?.name}
          </Text>
          <Text style={Fonts.t(12, Colors.blue[1], {wei: '500', l: 6})}>
            {item?.city.state}
          </Text>
        </View>
        <View
          style={Style.con({
            direc: 'row',
            items: 'center',
            justify: 'space-between',
          })}>
          <View style={Style.con({direc: 'row', items: 'center'})}>
            <Text style={Fonts.t(14, Colors.blue[1], {wei: '600'})}>
              {item?.matches}
            </Text>
            <Text style={Fonts.t(12, Colors.blue[1], {wei: '500', l: 4})}>
              {'Matches'}
            </Text>
          </View>
          <View style={Style.con({direc: 'row', items: 'flex-end'})}>
            <Text style={Fonts.t(16, Colors.black, {wei: '700'})}>
              {`${item?.currency}${item?.estimateSalary.toFixed(
                toFixedSalary,
              )}`}
            </Text>
            <Text style={Fonts.t(12, Colors.black, {l: 4})}>
              {item?.salaryTimeUnit}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
