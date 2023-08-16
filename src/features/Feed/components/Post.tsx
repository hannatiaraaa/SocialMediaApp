import React from 'react';
import {ImageStyle, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {ms} from 'react-native-size-matters';
import {IPostItem, TPostItem} from 'shared/types/dummyData';

// components
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GlobalText} from 'shared/components/GlobalText';
import {TextWithSeeMore} from './TextWithSeeMore';
import {FontWeight} from 'shared/types/components/GlobalText';
import {InteractionBar} from './InteractionBar';

export interface IRenderPostItem extends IPostItem {
  photoRatio?: number;
  randomNumber?: number;
}

const RenderProfilePicture = ({profilePicture}: TPostItem) => (
  <View style={styles.profilePictureContainer}>
    {profilePicture ? (
      <FastImage
        source={{uri: profilePicture}}
        resizeMode="cover"
        style={styles.profilePicture}
      />
    ) : (
      <Ionicons
        size={widthPercentageToDP(14)}
        name="person-circle-outline"
        color="dodgerblue"
      />
    )}
  </View>
);

const RenderName = ({name}: IRenderPostItem) => (
  <View>
    <GlobalText size={16} type={FontWeight.BOLD} style={styles.name}>
      {name}
    </GlobalText>
    <GlobalText size={12} color="gray">
      Today
    </GlobalText>
  </View>
);

type Props = {
  postItem: IRenderPostItem;
  onPhotoLoad: (width: number, height: number) => void;
};

export const Post = ({postItem, onPhotoLoad}: Props) => {
  const {
    name,
    profilePicture,
    content,
    photo,
    photoRatio,
    randomNumber = 1,
  } = postItem;

  const {photo: photoStyles} = usePhotoStyles({
    aspectRatio: photoRatio,
  });

  return (
    <View style={styles.card}>
      <View style={styles.userInfoContainer}>
        <RenderProfilePicture profilePicture={profilePicture} />
        <RenderName name={name} />
      </View>
      <TextWithSeeMore numberOfLessLines={3} containerStyle={styles.content}>
        {content}
      </TextWithSeeMore>

      {photo && (
        <FastImage
          onLoad={e => {
            const {width, height} = e.nativeEvent;
            onPhotoLoad(width, height);
          }}
          source={{uri: photo}}
          style={photoStyles}
          resizeMode="contain"
        />
      )}

      <InteractionBar
        name={name}
        photo={photo}
        content={content}
        voteNumber={Math.floor(Math.random() * randomNumber)}
        commentNumber={Math.floor(Math.random() * Math.pow(10, 3))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: ms(16),
    marginVertical: ms(4),
    backgroundColor: 'ghostwhite',
  },
  profilePictureContainer: {
    marginRight: ms(12),
  },
  name: {
    marginBottom: ms(2),
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(16),
  },
  profilePicture: {
    width: widthPercentageToDP(12),
    aspectRatio: 1,
    borderRadius: widthPercentageToDP(24),
  },
  content: {
    marginVertical: ms(12),
    paddingHorizontal: ms(16),
  },
});

const usePhotoStyles = ({aspectRatio}: ImageStyle) =>
  StyleSheet.create({
    photo: {
      width: '100%',
      aspectRatio,
    },
  });
