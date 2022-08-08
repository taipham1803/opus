import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Colors, Fonts, Style} from 'styles';
import {images} from 'assets';
import {Input} from 'components/Input';
import {Button} from 'components/Button';
import {Routes} from 'navigation';
import {Header} from 'components/Header';
import userStore from './../mobx/store';

interface SignInParamsInterface {
  email: string;
  password: string;
}

export default ({navigation: nav}: {navigation: NavigationProp<any>}) => {
  const [params, setParams] = React.useState<SignInParamsInterface>({
    email: '',
    password: '',
  });

  const onTextChange = React.useCallback((keyName: string, value: string) => {
    setParams(state => ({...state, [keyName]: value}));
  }, []);

  const onPressLogin = () => {
    console.log(params);
    userStore.setHasLogin(true);
  };
  const onPressForgotPassword = () => {};
  const onPressSignUp = () => {
    nav.navigate(Routes.SignUp);
  };

  return (
    <SafeAreaView style={Style.con({flex: 1, bg: Colors.white})}>
      <Header leftAppearance="back" title="Sign in" />
      <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={250}>
        <View style={Style.con({pt: 48, pb: 32, mt: 16, items: 'center'})}>
          <FastImage
            style={Style.con({w: 200, h: 56})}
            source={images.logoStackedColor}
          />
        </View>
        <View style={Style.con({py: 24, px: 16})}>
          <Input
            keyName="email"
            title="Email"
            placeholder="mhayes@bartonhealth.com"
            onChange={onTextChange}
          />
          <Input
            keyName="password"
            title="Password"
            placeholder="*********"
            secure
            onChange={onTextChange}
            style={Style.con({mt: 24})}
          />
        </View>
        <View style={Style.con({pt: 8, px: 16})}>
          <Button title={'Sign in'.toUpperCase()} onPress={onPressLogin} />
          <TouchableOpacity
            onPress={onPressForgotPassword}
            style={Style.con({pt: 16, pb: 8, cen: true, mt: 8})}>
            <Text style={[Fonts.t(16, Colors.blue[2])]}>
              {'Forgot password?'}
            </Text>
          </TouchableOpacity>
          <Text
            onPress={onPressSignUp}
            style={[Fonts.t(16, Colors.black, {t: 32, x: 36, text: 'center'})]}>
            {"Don't have an account?"}
            <Text style={[Fonts.t(16, Colors.blue[2], {t: 32})]}>
              {' Sign Up here'}
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
