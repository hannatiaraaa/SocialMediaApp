import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {ms} from 'react-native-size-matters';
import {FontWeight, IGlobalText} from 'shared/types/components/GlobalText';

export const GlobalText = ({
  color = 'black',
  size = 14,
  type = FontWeight.REGULAR,
  textAlign = 'left',
  ...props
}: IGlobalText) => {
  const styles = useStyles({
    color,
    fontSize: ms(size),
    fontWeight: type,
    textAlign,
  });
  return <Text {...props} style={[styles.text, props.style]} />;
};

const useStyles = (props: TextStyle) =>
  StyleSheet.create({
    text: props,
  });
