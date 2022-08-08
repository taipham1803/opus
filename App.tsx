import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {observer} from 'mobx-react';

import {MainStack} from 'navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Style} from 'styles';
import {ThemeProvider} from './src/context/ThemeProvider';
import {AuthStackContainer} from 'navigation/AuthStack';
import userStore from './src/mobx/store';

console.disableYellowBox = true;
console.ignoredYellowBox = [
  'Warning: View.propTypes',
  'Warning: BackAndroid',
  'VirtualizedLists should never be nested',
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  }, []);

  return (
    <>
      <GestureHandlerRootView style={[Style.con({flex: 1}), backgroundStyle]}>
        <ThemeProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              {userStore?.isUserHasLogin ? (
                <MainStack />
              ) : (
                <AuthStackContainer />
              )}
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
      <Toast />
    </>
  );
};

export default observer(App);
