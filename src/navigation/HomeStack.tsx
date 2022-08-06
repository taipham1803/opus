import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';
import Home from 'screens/Home';

const HomeStack = createNativeStackNavigator();

export const HomeStackContainer = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={Routes.Welcome}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <HomeStack.Screen
        name={Routes.Home}
        component={Home}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
