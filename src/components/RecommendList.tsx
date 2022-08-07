import React from 'react';
import {View, ViewStyle, FlatList} from 'react-native';

import {Style} from 'styles';
import {RecommendCard} from './RecommendCard';
import {Recommend} from 'entity/recommend';

interface RecommendListProps {
  style?: ViewStyle;
  data: Recommend[];
}

export const RecommendList = ({data, style}: RecommendListProps) => {
  return (
    <View style={[Style.con({}), style]}>
      <FlatList
        data={data}
        contentContainerStyle={Style.con({p: 16})}
        renderItem={({item}) => <RecommendCard item={item} />}
      />
    </View>
  );
};
