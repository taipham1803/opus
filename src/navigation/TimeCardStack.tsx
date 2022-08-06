import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';
import TimeCard from 'screens/TimeCard';

const TimeCardStack = createNativeStackNavigator();

export const TimeCardStackContainer = () => {
  return (
    <TimeCardStack.Navigator
      initialRouteName={Routes.TimeCard}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <TimeCardStack.Screen
        name={Routes.TimeCard}
        component={TimeCard}
        options={{headerShown: false}}
      />
    </TimeCardStack.Navigator>
  );
};
