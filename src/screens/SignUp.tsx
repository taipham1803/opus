import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Colors, Fonts, Style} from 'styles';
import {images} from 'assets';
import {Input} from 'components/Input';
import {Button} from 'components/Button';
import {Routes} from 'navigation';
import {Header} from 'components/Header';

interface SignUpParamsInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default ({navigation: nav}: {navigation: NavigationProp<any>}) => {
  const [params, setParams] = React.useState<SignUpParamsInterface>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onTextChange = React.useCallback((keyName: string, value: string) => {
    setParams(state => ({...state, [keyName]: value}));
  }, []);

  const onPressSignUp = () => {
    console.log(params);
    nav.navigate(Routes.DrawerStackContainer);
  };
  const onPressSignInHere = () => {
    nav.navigate(Routes.SignIn);
  };

  return (
    <SafeAreaView style={Style.con({flex: 1, bg: Colors.white})}>
      <Header leftAppearance="back" title="Sign up" />
      <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={250}>
        <View style={Style.con({pt: 48, pb: 32, mt: 16, items: 'center'})}>
          <FastImage
            style={Style.con({w: 200, h: 56})}
            source={images.logoStackedColor}
          />
        </View>
        <View style={Style.con({py: 24, px: 16})}>
          <Input
            keyName="firstName"
            title="First Name"
            placeholder="Micheal"
            onChange={onTextChange}
          />
          <Input
            keyName="lastName"
            title="Last Name"
            placeholder="Hayes"
            onChange={onTextChange}
            style={Style.con({mt: 24})}
          />
          <Input
            keyName="email"
            title="Email"
            placeholder="mhayes@bartonhealth.com"
            onChange={onTextChange}
            style={Style.con({mt: 24})}
          />
          <Input
            keyName="password"
            title="Password"
            placeholder="*********"
            secure
            onChange={onTextChange}
            style={Style.con({mt: 24})}
          />
          <Input
            keyName="passwordConfirm"
            title="Password Confirm"
            placeholder="*********"
            secure
            onChange={onTextChange}
            style={Style.con({mt: 24})}
          />
        </View>
        <View style={Style.con({pt: 8, px: 16})}>
          <Button title={'Sign up'.toUpperCase()} onPress={onPressSignUp} />
          <Text
            onPress={onPressSignInHere}
            style={[Fonts.t(16, Colors.black, {t: 40, x: 36, text: 'center'})]}>
            {'Have an account? '}
            <Text
              style={[Fonts.t(16, Colors.blue[2], {t: 32, dec: 'underline'})]}>
              {'Sign In here'}
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
