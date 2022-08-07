import React from 'react';
import {View, Text, ViewStyle, TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';
import {useDisclosure} from '@dwarvesf/react-hooks';

import {JobProperty, SuggestJob} from 'entity/suggest';
import {Colors, Fonts, Style} from 'styles';
import {Routes} from 'navigation';
import {Button} from './Button';
import {icons} from 'assets';
import {ConfirmModal} from './ConfirmModal';
import {LikeHeart} from './LikeHeart';

interface SuggestJobCardProps {
  style?: ViewStyle;
  item: SuggestJob;
}

export const SuggestJobCard = ({style, item}: SuggestJobCardProps) => {
  const nav = useNavigation();
  const confirmSubmitted = useDisclosure();

  const onPressJob = () => {
    nav.dispatch(CommonActions.navigate(Routes.JobDetail, {job: item}));
  };
  const handlePressSubmit = () => {
    confirmSubmitted.onOpen();
  };
  return (
    <>
      <TouchableOpacity
        onPress={onPressJob}
        style={[
          Style.con({w: 343, minH: 291, over: 'hidden'}),
          Style.border({bor: 16, color: Colors.gray.light, width: 1}),
          style,
        ]}>
        <FastImage
          style={[
            Style.con({h: 99, direc: 'row', justify: 'space-between'}),
            Style.border({btlr: 16, btrr: 16}),
          ]}
          source={item.banner}>
          <View
            style={Style.con({
              direc: 'row',
              items: 'center',
              self: 'flex-end',
              mb: 8,
              ml: 16,
            })}>
            <FastImage
              style={Style.con({size: 16, mr: 8})}
              source={icons.iconLocation}
            />
            <Text style={Fonts.t(12, Colors.white, {wei: '800'})}>
              {item?.location}
            </Text>
          </View>
          <View
            style={[
              Style.con({
                direc: 'row',
                bg: Colors.blue.light,
                p: 8,
                self: 'flex-start',
              }),
              Style.border({btrr: 16, bblr: 16}),
            ]}>
            <LikeHeart />
            <TouchableOpacity style={Style.con({size: 24, cen: true, ml: 8})}>
              <FastImage
                style={Style.con({size: 16})}
                source={icons.iconShare}
              />
            </TouchableOpacity>
          </View>
        </FastImage>
        <View style={Style.con({px: 16, pt: 12, pb: 12})}>
          <View style={Style.con({direc: 'row'})}>
            <View style={Style.con({flex: 1})}>
              <Text style={Fonts.t(16, Colors.blue[2], {wei: '600'})}>
                {item?.job?.title}
              </Text>
              <Text style={Fonts.t(12, Colors.text[3], {wei: '600', t: 2})}>
                {item?.job?.company}
              </Text>
              <View style={Style.con({mt: 8})}>
                {item.job.properties.map((property: JobProperty) => {
                  return (
                    <View
                      style={Style.con({direc: 'row', my: 2})}
                      key={property.id}>
                      <FastImage
                        style={Style.con({size: 16, mr: 12})}
                        source={property.icon}
                      />
                      <Text
                        style={Fonts.t(
                          property.fontSize ?? 12,
                          property.color ?? Colors.blue[1],
                          {
                            wei: property.fontWeight ?? '500',
                          },
                        )}>
                        {property.title}
                      </Text>
                    </View>
                  );
                })}
              </View>
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
              mt: 2,
            })}>
            <Text style={Fonts.t(12, Colors.black, {r: 6})}>{'Estimated'}</Text>
            <Text style={Fonts.t(16, Colors.black, {wei: '600', r: 4})}>
              {item.job.estimatedSalary}
            </Text>
            <Text style={Fonts.t(12, Colors.black)}>
              {item.job.salaryTimeUnit}
            </Text>
          </View>
          <Button
            title={'PLEASE SUBMIT'.toUpperCase()}
            appearance="borderFull"
            style={Style.con({mt: 8})}
            onPress={handlePressSubmit}
          />
        </View>
      </TouchableOpacity>
      <ConfirmModal
        open={confirmSubmitted.isOpen}
        onClosed={confirmSubmitted.onClose}
        modalHeight={162 + 24}
      />
    </>
  );
};
