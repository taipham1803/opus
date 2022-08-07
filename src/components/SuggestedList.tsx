import React from 'react';
import {View, ViewStyle, FlatList, Text, TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/core';

import {Colors, Fonts, Style} from 'styles';
import FastImage from 'react-native-fast-image';
import {icons, images} from 'assets';
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
  contentStyle?: ViewStyle;
}

export const SuggestedList = ({
  data,
  title,
  style,
  showHeader = true,
  orientation = 'horizontal',
  contentStyle = {},
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
        style={Style.con({mt: 8})}
        {...(orientation === 'horizontal' ? {horizontal: true} : {})}
        ListEmptyComponent={() => {
          return (
            <View style={Style.con({w: 343, h: 166, items: 'center'})}>
              <FastImage
                style={Style.con({w: 164, h: 136})}
                source={images.noSuggest}
              />
              <Text style={Fonts.t(12, Colors.black, {t: 12})}>
                {'No suggested jobs matches with your profile'}
              </Text>
            </View>
          );
        }}
        contentContainerStyle={[Style.con({px: 16}), contentStyle]}
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
