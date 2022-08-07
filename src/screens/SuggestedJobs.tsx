import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationProp} from '@react-navigation/core';

import {Header} from 'components/Header';
import {Colors, Style} from 'styles';
import {SuggestedList} from 'components/SuggestedList';
import {dummyDataSuggested} from 'data';

export default ({}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView style={Style.con({flex: 1, bg: Colors.white})}>
      <Header title="Chicago" leftAppearance="back" />
      <SuggestedList
        showHeader={false}
        data={dummyDataSuggested}
        orientation="vertical"
      />
    </SafeAreaView>
  );
};
