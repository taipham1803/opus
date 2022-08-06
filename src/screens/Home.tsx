import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationProp} from '@react-navigation/core';
import {Header} from 'components/Header';
import {Colors, Style} from 'styles';

export default ({}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView style={Style.con({flex: 1, bg: Colors.white})}>
      <Header title="Home" leftAppearance="drawer" />
      <View />
    </SafeAreaView>
  );
};
