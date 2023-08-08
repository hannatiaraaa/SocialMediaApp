import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import data from '../utils/dummyData';
import {Post} from '../components/Post';
import {ms} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {GlobalText} from '../components/GlobalText';

export default function Feed() {
  const {posts = []} = data;
  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={posts}
        keyExtractor={item => item.name}
        renderItem={({item}) => Post({item})}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'turquoise',
          width: ms(40),
          height: ms(40),
          position: 'absolute',
          bottom: ms(62),
          right: ms(20),
          borderRadius: ms(200),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <GlobalText color="white" type="900">
          E
        </GlobalText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
