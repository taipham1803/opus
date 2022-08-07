import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';
import {BottomTabContainer} from './BottomTab';

const DrawerStack = createDrawerNavigator();

export const DrawerStackContainer = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName={Routes.BottomTabContainer}
      defaultScreenOptions={{
        drawerType: 'front',
        drawerPosition: 'left',
        drawerStyle: {
          width: '85%',
        },
      }}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleAlign: 'center',
      }}>
      <DrawerStack.Screen
        name={Routes.BottomTabContainer}
        component={BottomTabContainer}
        options={{headerShown: false}}
      />
    </DrawerStack.Navigator>
  );
};
