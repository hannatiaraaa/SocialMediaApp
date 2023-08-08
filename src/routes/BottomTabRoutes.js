import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';
import {ms} from 'react-native-size-matters';
import data from '../utils/dummyData';

// screens
import Feed from '../screens/Feed';
import Chat from '../screens/Chat';
import News from '../screens/News';
import Profile from '../screens/Profile';

const {imageUrl} = data?.accountInfo ?? {};

const RenderTabBarIcon = ({name}) => (
  <Entypo name={name} size={ms(24)} color="gray" />
);

export const BottomTabRoutes = [
  {
    name: 'Feed',
    component: Feed,
    options: {
      tabBarIcon: () => <RenderTabBarIcon name="suitcase" />,
    },
  },
  {
    name: 'Chat',
    component: Chat,
    options: {
      tabBarIcon: () => <RenderTabBarIcon name="chat" />,
    },
  },
  {
    name: 'News',
    component: News,
    options: {
      tabBarIcon: () => <RenderTabBarIcon name="news" />,
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {
      tabBarIcon: () =>
        imageUrl ? (
          <FastImage source={{uri: imageUrl}} style={styles.profile} />
        ) : (
          <RenderTabBarIcon name="user" />
        ),
    },
  },
];

const styles = StyleSheet.create({
  profile: {
    borderRadius: ms(50),
    height: ms(24),
    width: ms(24),
  },
});
