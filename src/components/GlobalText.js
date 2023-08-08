import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ms} from 'react-native-size-matters';

export const GlobalText = ({
  color = 'black',
  size = ms(14),
  type = 'regular',
  textAlign = 'left',
  lineHeight,
  style,
  ...props
}) => {
  const styles = useStyles({
    color,
    fontSize: size,
    fontWeight: type,
    textAlign,
    lineHeight,
  });
  return <Text style={[styles.text, style]} {...props} />;
};

const useStyles = props =>
  StyleSheet.create({
    text: props,
  });
