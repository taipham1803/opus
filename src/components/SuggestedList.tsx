import React from 'react';
import {View, ViewStyle, FlatList, Text, TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/core';

import {Colors, Fonts, Style} from 'styles';
import FastImage from 'react-native-fast-image';
import {icons} from 'assets';
import {SuggestJob} from 'entity/suggest';
import {SuggestJobCard} from './SuggestJobCard';
import {Routes} from 'navigation';

export type ListOrientation = 'horizontal' | 'vertical';

interface SuggestedListProps {
  style?: ViewStyle;
  title?: string;
  data: SuggestJob[];
  showHeader?: boolean;
  orientation?: ListOrientation;
}

export const SuggestedList = ({
  data,
  title,
  style,
  showHeader = true,
  orientation = 'horizontal',
}: SuggestedListProps) => {
  const nav = useNavigation();
  const handlePressSeeAll = () => {
    nav.dispatch(CommonActions.navigate(Routes.SuggestedJobs));
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
            {title ?? 'Suggested'.toUpperCase()}
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
        {...(orientation === 'horizontal' ? {horizontal: true} : {})}
        contentContainerStyle={Style.con({px: 16, py: 8})}
        renderItem={({item}) => (
          <SuggestJobCard
            item={item}
            style={
              orientation === 'horizontal'
                ? Style.con({mr: 8})
                : Style.con({mb: 8})
            }
          />
        )}
      />
    </View>
  );
};
