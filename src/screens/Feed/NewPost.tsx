import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';

// components
import {GlobalText} from 'shared/components/GlobalText';
import {FontWeight} from 'shared/types/components/GlobalText';

const NewPost = () => {
  const RenderScreen = useMemo(
    () => (
      <SafeAreaView style={styles.container}>
        <GlobalText type={FontWeight.SEMI_BOLD}>What's on your day?</GlobalText>
        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
          <GlobalText type={FontWeight.EXTRA_BOLD} size={24} color="dodgerblue">
            START POST
          </GlobalText>
        </TouchableOpacity>
      </SafeAreaView>
    ),
    [],
  );

  return RenderScreen;
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: ms(8),
    backgroundColor: 'ghostwhite',
    borderRadius: ms(16),
    padding: ms(16),
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: ms(5),
  },
});
