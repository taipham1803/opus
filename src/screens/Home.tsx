import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/core';

import {Colors, Style} from 'styles';
import {Header} from 'components/Header';
import {RecommendList} from 'components/RecommendList';
import {SuggestedList} from 'components/SuggestedList';
import {PopularList} from 'components/PopularList';
import {
  dummyDataPopularCities,
  dummyDataRecommends,
  dummyDataSuggested,
} from 'data';

export default ({}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView style={Style.con({flex: 1, bg: Colors.white})}>
      <Header title="Home" leftAppearance="drawer" />
      <ScrollView
        style={Style.con({flex: 1})}
        contentContainerStyle={Style.con({pb: 80})}>
        <RecommendList data={dummyDataRecommends} />
        <SuggestedList data={dummyDataSuggested} />
        <PopularList
          data={dummyDataPopularCities}
          toFixedSalary={0}
          style={Style.con({mt: 16})}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
