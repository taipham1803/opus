import React from 'react';
import {View, Text, ViewStyle, TouchableOpacity} from 'react-native';

import {Recommend} from 'entity/recommend';
import {Colors, Style} from 'styles';
import FastImage from 'react-native-fast-image';

interface RecommendCardProps {
  style?: ViewStyle;
  item: Recommend;
}

export const RecommendCard = ({style, item}: RecommendCardProps) => {
  return (
    <TouchableOpacity
      style={[
        Style.con({direc: 'row', mb: 8, minH: 86}),
        Style.border({bor: 16, color: Colors.primary, width: 1}),
        style,
      ]}>
      <View style={Style.con({w: 106, cen: true, py: 12})}>
        <FastImage style={Style.con({size: 64})} source={item.icon} />
      </View>
      <View style={Style.con({flex: 1, p: 12})}>
        <Text>{item?.title}</Text>
        <Text>{item?.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
