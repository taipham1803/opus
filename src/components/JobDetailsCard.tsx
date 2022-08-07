import React from 'react';
import {Text, View, ViewStyle} from 'react-native';

import {JobProperty} from 'entity/suggest';
import {Colors, Fonts, Style} from 'styles';

interface JobDetailsCardProps {
  style?: ViewStyle;
  properties: JobProperty[];
  title?: string;
}

export const JobDetailsCard = ({
  properties,
  style,
  title,
}: JobDetailsCardProps) => {
  return (
    <View style={[Style.con({mt: 8}), style]}>
      <View style={Style.con({mx: 16, bg: Colors.gray.light, h: 1})} />
      <View style={Style.con({p: 16})}>
        <Text style={Fonts.t(16, Colors.blue[1], {wei: '500', t: 8, b: 16})}>
          {title ?? 'Details'.toUpperCase()}
        </Text>
        {Array.isArray(properties) &&
          properties.map((property: JobProperty) => {
            if (!property.icon || !property.title) {
              return null;
            }
            return (
              <View
                style={Style.con({direc: 'row', pt: 4, pb: 8})}
                key={property.id}>
                <View style={Style.con({w: 80, mr: 20})}>
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
                <Text
                  style={Fonts.t(
                    property.fontSize ?? 14,
                    property.color ?? Colors.blue[1],
                    {
                      wei: property.fontWeight ?? '600',
                    },
                  )}>
                  {property.content}
                </Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};
