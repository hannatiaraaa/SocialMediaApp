import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {GlobalText} from './GlobalText';

export const TextWithSeeMore = ({
  text,
  numberOfLessLines = 1,
  moreText = 'More',
  lessText = 'Less',
  textSize,
  textColor = 'black',
  textType,
  textAlign,
  type = '600',
  size,
  color = 'blue',
  align,
  containerStyle,
  textStyle,
  style,
  AdditionalComponent,
  ...props
}) => {
  const [SeeMoreButton, setSeeMoreButton] = useState(false);
  const [IsTextShown, setIsTextShown] = useState(false);
  const [numLines, setNumLines] = useState(undefined);

  const onTextLayout = useCallback(
    e => {
      if (!SeeMoreButton) {
        const linesLength = e.nativeEvent.lines?.length ?? [];
        if (linesLength > numberOfLessLines) {
          setSeeMoreButton(true);
          setNumLines(numberOfLessLines);
        }
      }
    },
    [SeeMoreButton, numberOfLessLines],
  );

  const toggleText = () => {
    setNumLines(IsTextShown ? numberOfLessLines : undefined);
    setIsTextShown(!IsTextShown);
  };

  return (
    <View style={containerStyle}>
      <GlobalText
        onTextLayout={onTextLayout}
        numberOfLines={numLines}
        size={textSize}
        color={textColor}
        type={textType}
        style={textStyle}
        textAlign={textAlign}
        ellipsizeMode="tail">
        {text}
      </GlobalText>
      {IsTextShown ? AdditionalComponent : null}

      {SeeMoreButton && (
        <GlobalText
          onPress={toggleText}
          size={size}
          type={type}
          color={color}
          textAlign={align}
          style={[styles.textButton, style]}
          {...props}>
          {IsTextShown ? lessText : moreText}
        </GlobalText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textButton: {
    marginTop: ms(8),
  },
});
