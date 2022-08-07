import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './Routes';
import {icons} from './../assets/index';
import {Colors, Style} from 'styles';

import TabBar from './TabBar';
import {HomeStackContainer} from './HomeStack';
import {SearchStackContainer} from './SearchStack';
import {MyJobsStackContainer} from './MyJobsStack';
import {TimeCardStackContainer} from './TimeCardStack';
import {useTheme} from 'context/ThemeProvider';

const bottomTabStyles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
});

const BottomTab = createBottomTabNavigator();

export const BottomTabContainer = () => {
  const {colors} = useTheme();
  const getIconTintColor = (focused: boolean): string => {
    if (focused) {
      return Colors.black;
    }
    return colors.buttonIconColor;
  };
  return (
    <BottomTab.Navigator
      screenOptions={{}}
      tabBar={props => <TabBar {...props} />}>
      <BottomTab.Screen
        key={`tab-${Routes.HomeStackContainer}`}
        name={Routes.HomeStackContainer}
        component={HomeStackContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({
                  tin: getIconTintColor(focused),
                }),
              ]}
              source={icons.iconHome}
            />
          ),
        }}
      />
      <BottomTab.Screen
        key={`tab-${Routes.SearchStackContainer}`}
        name={Routes.SearchStackContainer}
        component={SearchStackContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({tin: getIconTintColor(focused)}),
              ]}
              source={icons.iconSearch}
            />
          ),
        }}
      />
      <BottomTab.Screen
        key={`tab-${Routes.MyJobsStackContainer}`}
        name={Routes.MyJobsStackContainer}
        component={MyJobsStackContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({tin: getIconTintColor(focused)}),
              ]}
              source={icons.iconMyJob}
            />
          ),
        }}
      />
      <BottomTab.Screen
        key={`tab-${Routes.TimeCardStackContainer}`}
        name={Routes.TimeCardStackContainer}
        component={TimeCardStackContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({tin: getIconTintColor(focused)}),
              ]}
              source={icons.iconTimecard}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
