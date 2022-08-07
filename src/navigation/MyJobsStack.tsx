import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';
import MyJobs from 'screens/MyJobs';

const MyJobsStack = createNativeStackNavigator();

export const MyJobsStackContainer = () => {
  return (
    <MyJobsStack.Navigator
      initialRouteName={Routes.MyJobs}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <MyJobsStack.Screen
        name={Routes.MyJobs}
        component={MyJobs}
        options={{headerShown: false}}
      />
    </MyJobsStack.Navigator>
  );
};
