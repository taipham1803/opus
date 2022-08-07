import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/core';
import {Header} from 'components/Header';
import {Colors, Style} from 'styles';
import {PopularList} from 'components/PopularList';
import {dummyDataPopularCities} from 'data';

export default ({}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView style={Style.con({flex: 1, bg: Colors.white})}>
      <Header title="Matches in popular cities" leftAppearance="back" />
      <PopularList
        showHeader={false}
        style={Style.con({flex: 1})}
        data={dummyDataPopularCities}
        contentStyle={Style.con({pb: 80})}
      />
    </SafeAreaView>
  );
};
