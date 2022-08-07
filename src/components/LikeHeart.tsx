import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons} from 'assets';
import {Style} from 'styles';

interface LikeHeartProps {
  style?: ViewStyle;
  liked?: boolean;
}

export const LikeHeart = ({style, liked = false}: LikeHeartProps) => {
  const [isLiked, setLiked] = React.useState<boolean>(liked);
  const handlePressLike = () => {
    setLiked(preState => !preState);
  };
  return (
    <TouchableOpacity
      onPress={handlePressLike}
      style={[Style.con({size: 24, cen: true}), style]}>
      <FastImage
        style={Style.con({size: 20})}
        source={isLiked ? icons.iconHeartFull : icons.iconHeart}
      />
    </TouchableOpacity>
  );
};
