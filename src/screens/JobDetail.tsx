import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/core';
import {useDisclosure} from '@dwarvesf/react-hooks';

import {Colors, Fonts, Style} from 'styles';
import FastImage from 'react-native-fast-image';
import {icons, placeholders} from 'assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LikeHeart} from 'components/LikeHeart';
import {dummyDataSuggested} from 'data';
import {JobDetailsCard} from 'components/JobDetailsCard';
import {JobRequirementsCard} from 'components/JobRequirementsCard';
import {Button} from 'components/Button';
import {ConfirmModal} from 'components/ConfirmModal';

export default ({navigation: nav}: {navigation: NavigationProp<any>}) => {
  const confirmSubmitted = useDisclosure();
  const onCloseModal = () => nav.goBack();
  const handlePressTellMeMore = () => {};
  const handlePressPleaseSubmit = () => {
    confirmSubmitted.onOpen();
  };
  const item = dummyDataSuggested[0];
  return (
    <View style={Style.con({flex: 1, bg: Colors.white})}>
      <FastImage
        style={Style.con({w: '100%', h: 174})}
        source={placeholders.place1}>
        <SafeAreaView>
          <View
            style={Style.con({
              direc: 'row',
              w: '100%',
              justify: 'space-between',
              px: 12,
            })}>
            <TouchableOpacity
              onPress={onCloseModal}
              style={Style.con({size: 36, cen: true})}>
              <View
                style={Style.con({
                  size: 20,
                  bor: 20,
                  bg: Colors.blur[1],
                  cen: true,
                })}>
                <FastImage
                  style={Style.con({size: 16})}
                  source={icons.iconArrowDown}
                />
              </View>
            </TouchableOpacity>
            <View
              style={[
                Style.con({
                  direc: 'row',
                  bg: Colors.blue.light,
                  p: 8,
                  self: 'flex-start',
                  bor: 12,
                }),
              ]}>
              <LikeHeart />
              <TouchableOpacity style={Style.con({size: 24, cen: true, ml: 8})}>
                <FastImage
                  style={Style.con({size: 16})}
                  source={icons.iconShare}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </FastImage>
      <SafeAreaView edges={['bottom']} style={Style.con({flex: 1})}>
        <View style={Style.con({px: 16, pt: 12, pb: 12})}>
          <View style={Style.con({direc: 'row'})}>
            <View style={Style.con({flex: 1})}>
              <Text style={Fonts.t(16, Colors.blue[2], {wei: '600'})}>
                {item?.job?.title}
              </Text>
              <Text style={Fonts.t(12, Colors.text[3], {wei: '600', t: 2})}>
                {item?.job?.company}
              </Text>
            </View>
            <View style={Style.con({items: 'flex-end'})}>
              <View
                style={Style.con({
                  size: 32,
                  bg: Colors.neon[1],
                  bor: 9,
                  cen: true,
                })}>
                <Text style={Fonts.t(20, Colors.white, {wei: '600', t: 2})}>
                  {item?.job?.match}
                </Text>
              </View>
              <Text style={Fonts.t(12, Colors.blue[2], {wei: '400', t: 2})}>
                {'% match'}
              </Text>
            </View>
          </View>
          <View
            style={Style.con({
              direc: 'row',
              items: 'flex-end',
              justify: 'flex-end',
              mt: 6,
            })}>
            <Text style={Fonts.t(12, Colors.black, {r: 6})}>{'Estimated'}</Text>
            <Text style={Fonts.t(16, Colors.black, {wei: '600', r: 4})}>
              {item.job.estimatedSalary}
            </Text>
            <Text style={Fonts.t(12, Colors.black)}>
              {item.job.salaryTimeUnit}
            </Text>
          </View>
        </View>
        <ScrollView style={Style.con({flex: 1})}>
          <JobDetailsCard properties={item?.job?.properties} />
          <JobRequirementsCard requirements={item?.job?.requirements} />
        </ScrollView>
        <View style={Style.con({direc: 'row', px: 16, mb: 16})}>
          <Button
            title={'TEll me more'.toUpperCase()}
            style={[Style.con({flex: 1, bor: 32})]}
            borderWidth={1}
            appearance="secondary"
            onPress={handlePressTellMeMore}
          />
          <Button
            title={'please submit'.toUpperCase()}
            style={[Style.con({flex: 1, ml: 8})]}
            borderWidth={1}
            appearance="borderFull"
            onPress={handlePressPleaseSubmit}
          />
        </View>
      </SafeAreaView>
      <ConfirmModal
        open={confirmSubmitted.isOpen}
        onClosed={confirmSubmitted.onClose}
        modalHeight={162 + 20}
      />
    </View>
  );
};
