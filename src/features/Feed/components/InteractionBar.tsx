import React, {useState} from 'react';
import {Share, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {IRenderPostItem} from './Post';
import data from 'shared/types/dummyData';

// icons
import {IconButtonProps} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

// components
import {GlobalText} from 'shared/components/GlobalText';
import {FontWeight} from 'shared/types/components/GlobalText';

// hooks
import {navigate} from 'shared/hooks/useCurrentNavigation';
import {getCountFormat} from 'Feed/hooks/getCountFormat';

const RenderIcon = ({name, ...props}: IconButtonProps) => (
  <Ionicons.Button
    name={name}
    size={ms(24)}
    color="silver"
    backgroundColor="transparent"
    underlayColor="transparent"
    activeOpacity={0.8}
    iconStyle={styles.icon}
    {...props}
  />
);

const RenderThumbsIcon = ({name, ...props}: IconButtonProps) => (
  <Entypo.Button
    name={`thumbs-${name}`}
    size={ms(24)}
    color="silver"
    backgroundColor="transparent"
    underlayColor="transparent"
    activeOpacity={0.4}
    iconStyle={styles.icon}
    {...props}
  />
);

interface Props extends IRenderPostItem {
  commentNumber: number;
  voteNumber: number;
}

export const InteractionBar = ({
  commentNumber,
  voteNumber,
  name,
  photo,
  content,
}: Props) => {
  const {name: profileName} = data.accountInfo;
  const [vote, setVote] = useState(voteNumber);

  const onCommentPress = () => navigate('Comment');

  const onShare = () => {
    const title =
      profileName === name
        ? `${profileName} shared a post for you`
        : `${profileName} shared a post of ${name} for you.`;
    const ellipsisContent = content?.substring(0, 100) + '...';
    const message = photo
      ? `${name} photo is just posted on Social Media. ${ellipsisContent}`
      : ellipsisContent;
    const url = 'https://github.com/hannatiaraaa/SocialMediaTest';

    (async () => {
      try {
        await Share.share(
          {title, message, url},
          {
            subject: title,
            dialogTitle: 'Share',
          },
        );
      } catch (error) {
        console.log(error, 'share error');
      }
    })();
  };

  return (
    <View style={[styles.row, styles.container]}>
      <View style={styles.row}>
        <RenderIcon name="share-social-outline" onPress={onShare} />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onCommentPress}
          style={styles.row}>
          <RenderIcon
            name="chatbox-ellipses-outline"
            onPress={onCommentPress}
          />
          <GlobalText color="silver">{commentNumber}</GlobalText>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <RenderIcon name="ban-outline" />
        <RenderThumbsIcon
          name="up"
          onPress={() => setVote(prevState => prevState + 1)}
        />
        <GlobalText size={16} color="darkcyan" type={FontWeight.MEDIUM}>
          {getCountFormat(vote)}
        </GlobalText>
        <RenderThumbsIcon
          name="down"
          onPress={() => vote > 0 && setVote(prevState => prevState - 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: ms(16),
    paddingTop: ms(8),
  },
  icon: {marginRight: 0},
});
