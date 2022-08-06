import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';
import Home from 'screens/Home';

const MyJobsStack = createNativeStackNavigator();

export const MyJobsStackContainer = () => {
  return (
    <MyJobsStack.Navigator
      initialRouteName={Routes.Welcome}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <MyJobsStack.Screen
        name={Routes.Home}
        component={Home}
        options={{headerShown: false}}
      />
    </MyJobsStack.Navigator>
  );
};
