import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';
import Home from 'screens/Home';
import SuggestedJobs from 'screens/SuggestedJobs';
import PopularCities from 'screens/PopularCities';

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
        gestureEnabled: false,
      }}>
      <HomeStack.Screen
        name={Routes.Home}
        component={Home}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <HomeStack.Screen
        name={Routes.SuggestedJobs}
        component={SuggestedJobs}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <HomeStack.Screen
        name={Routes.PopularCities}
        component={PopularCities}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </HomeStack.Navigator>
  );
};
