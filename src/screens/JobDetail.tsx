import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationProp} from '@react-navigation/core';
import {useDisclosure} from '@dwarvesf/react-hooks';

import {Header} from 'components/Header';
import {ConfirmModal} from 'components/ConfirmModal';
import {Colors, Style} from 'styles';

export default ({}: {navigation: NavigationProp<any>}) => {
  const confirmSubmitted = useDisclosure();
  return (
    <SafeAreaView style={Style.con({flex: 1, bg: Colors.white})}>
      <Header title="Chicago" leftAppearance="back" />
      <ConfirmModal
        open={confirmSubmitted.isOpen}
        onClosed={confirmSubmitted.onClose}
        modalHeight={162}
      />
    </SafeAreaView>
  );
};
