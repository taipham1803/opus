import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/core';

export default ({}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView>
      <View />
    </SafeAreaView>
  );
};
