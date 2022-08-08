import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';

import {DrawerStackContainer} from './DrawerStack';

import JobDetail from 'screens/JobDetail';

const MainStack = createNativeStackNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      initialRouteName={Routes.DrawerStackContainer}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        gestureEnabled: false,
      }}>
      <MainStack.Screen
        name={Routes.DrawerStackContainer}
        component={DrawerStackContainer}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <MainStack.Screen
        name={Routes.JobDetail}
        component={JobDetail}
        options={{
          headerShown: false,
          gestureEnabled: true,
          presentation: 'fullScreenModal',
        }}
      />
    </MainStack.Navigator>
  );
}
