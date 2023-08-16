import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ms} from 'react-native-size-matters';

// utils
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from 'shared/types/dummyData';

// screens
import Feed from 'screens/Feed';
import Chat from 'screens/Chat';
import News from 'screens/News';
import Profile from 'screens/Profile';

const {imageUrl} = data?.accountInfo ?? {};

type Props = {name: string; size?: number};

const RenderTabBarIcon = ({name, size = 24}: Props) => (
  <Ionicons
    name={name}
    size={ms(size)}
    color="silver"
    style={styles.tabBarIcon}
  />
);

export const BottomTabRoutes = [
  {
    name: 'Feed',
    component: Feed,
    options: {
      tabBarIcon: () => <RenderTabBarIcon name="watch-outline" />,
    },
  },
  {
    name: 'Chat',
    component: Chat,
    options: {
      tabBarIcon: () => <RenderTabBarIcon name="chatbubbles-outline" />,
    },
  },
  {
    name: 'News',
    component: News,
    options: {
      tabBarIcon: () => <RenderTabBarIcon name="newspaper-outline" />,
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
          <RenderTabBarIcon size={32} name="person-circle-outline" />
        ),
    },
  },
];

const styles = StyleSheet.create({
  tabBarIcon: {
    fontWeight: '600',
  },
  profile: {
    borderRadius: ms(60),
    width: ms(28),
    aspectRatio: 1,
  },
});
