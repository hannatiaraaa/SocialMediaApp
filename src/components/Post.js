import React from 'react';
import {View} from 'react-native';
import {GlobalText} from './GlobalText';
import FastImage from 'react-native-fast-image';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {ms} from 'react-native-size-matters';
import {TextWithSeeMore} from './TextWithSeeMore';

export const Post = ({item}) => {
  const {name, content, photo, profilePicture} = item;
  return (
    <View
      style={{
        paddingVertical: ms(16),
        marginVertical: ms(4),
        backgroundColor: 'ghostwhite',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: ms(16),
        }}>
        <FastImage
          source={{uri: profilePicture}}
          resizeMode="cover"
          style={{
            width: widthPercentageToDP(12),
            aspectRatio: 1,
            borderRadius: widthPercentageToDP(24),
            marginRight: ms(8),
          }}
        />
        <View>
          <GlobalText type="bold">{name}</GlobalText>
          <GlobalText>Today</GlobalText>
        </View>
      </View>
      <TextWithSeeMore
        text={content}
        numberOfLessLines={3}
        containerStyle={{marginVertical: ms(24), paddingHorizontal: ms(16)}}
      />

      {photo && (
        <FastImage
          source={{uri: photo}}
          style={{width: '100%', aspectRatio: 1}}
          color="royalblue"
        />
      )}
    </View>
  );
};
