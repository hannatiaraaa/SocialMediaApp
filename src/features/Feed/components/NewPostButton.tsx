import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const NewPostButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <FontAwesome5 name="pencil-alt" size={ms(20)} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'darkcyan',
    width: ms(48),
    height: ms(48),
    position: 'absolute',
    bottom: ms(62),
    right: ms(20),
    borderRadius: ms(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
