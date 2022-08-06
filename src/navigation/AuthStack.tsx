import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';
import Welcome from 'screens/Welcome';
import SignIn from 'screens/SignIn';
import SignUp from 'screens/SignUp';

const AuthStack = createNativeStackNavigator();

export const AuthStackContainer = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={Routes.Welcome}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <AuthStack.Screen
        name={Routes.Welcome}
        component={Welcome}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={Routes.SignIn}
        component={SignIn}
        options={{headerShown: true, title: 'Sign in'.toUpperCase()}}
      />
      <AuthStack.Screen
        name={Routes.SignUp}
        component={SignUp}
        options={{headerShown: true, title: 'Sign up'.toUpperCase()}}
      />
    </AuthStack.Navigator>
  );
};
