import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/core';
import {Header} from 'components/Header';
import {Colors, Style} from 'styles';
import {RecommendList} from 'components/RecommendList';
import {
  dummyDataPopularCities,
  dummyDataRecommends,
  dummyDataSuggested,
} from 'data';
import {SuggestedList} from 'components/SuggestedList';
import {PopularList} from 'components/PopularList';

export default ({}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView style={Style.con({flex: 1, bg: Colors.white})}>
      <Header title="Home" leftAppearance="drawer" />
      <ScrollView style={Style.con({flex: 1})}>
        <RecommendList data={dummyDataRecommends} />
        <SuggestedList data={dummyDataSuggested} />
        <PopularList data={dummyDataPopularCities} toFixedSalary={0} />
      </ScrollView>
    </SafeAreaView>
  );
};
