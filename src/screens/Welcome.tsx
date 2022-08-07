import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';
import {Colors, Fonts, Style} from 'styles';
import {images} from 'assets';
import {Button} from 'components/Button';
import {Routes} from 'navigation';

export default ({navigation: nav}: {navigation: NavigationProp<any>}) => {
  const onPressSignUp = () => {
    nav.navigate(Routes.SignUp);
  };
  const onPressSignIn = () => {
    nav.navigate(Routes.SignIn);
  };
  return (
    <SafeAreaView
      style={Style.con({flex: 1, justify: 'center', bg: Colors.white})}>
      <FastImage
        style={Style.con({w: 200, h: 56, mb: 32, self: 'center'})}
        source={images.logoStackedColor}
      />
      <View style={Style.con({pt: 32, items: 'center'})}>
        <Text style={Fonts.t(16, Colors.blue[1], {wei: '600'})}>
          {'Welcome to Host Healthcare!'}
        </Text>
        <Text style={Fonts.t(14, Colors.blue[1], {wei: '400', t: 4})}>
          {'Sign up to find your perfect job today.'}
        </Text>
      </View>
      <View style={Style.con({pt: 24, px: 16})}>
        <Button
          title={'Sign up'.toUpperCase()}
          appearance="primary"
          onPress={onPressSignUp}
        />
        <Button
          title={'Sign in'.toUpperCase()}
          appearance="secondary"
          onPress={onPressSignIn}
          style={Style.con({mt: 8})}
        />
      </View>
    </SafeAreaView>
  );
};
