import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';
import Search from 'screens/Search';

const SearchStack = createNativeStackNavigator();

export const SearchStackContainer = () => {
  return (
    <SearchStack.Navigator
      initialRouteName={Routes.Search}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <SearchStack.Screen
        name={Routes.Search}
        component={Search}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
};
