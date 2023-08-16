import React, {useCallback, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextLayoutEventData,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {ms} from 'react-native-size-matters';

// components
import {GlobalText} from 'shared/components/GlobalText';
import {
  FontWeight,
  IGlobalText,
  TTextAlign,
} from 'shared/types/components/GlobalText';

interface IButtonText extends IGlobalText {
  buttonSize?: number;
  buttonColor?: string;
  buttonType?: FontWeight;
  buttonAlign?: TTextAlign;
  buttonStyle?: TextStyle;
}

interface ITextWithSeeMore extends IGlobalText, IButtonText {
  numberOfLessLines: number;
  moreText?: string;
  lessText?: string;
  containerStyle?: ViewStyle;
}

interface ContainerProps extends ViewProps {
  IsTextShown: boolean;
}

const RenderContainer = ({children, style, IsTextShown}: ContainerProps) => {
  if (IsTextShown) {
    return <GlobalText style={style}>{children}</GlobalText>;
  }
  return <View style={[styles.container, style]}>{children}</View>;
};

export const TextWithSeeMore = ({
  numberOfLessLines = 1,
  moreText = 'More',
  lessText = 'Less',
  children,
  buttonSize,
  buttonColor = 'dodgerblue',
  buttonType = FontWeight.SEMI_BOLD,
  buttonAlign,
  containerStyle,
  style,
  buttonStyle,
  ...props
}: ITextWithSeeMore) => {
  const [SeeMoreButton, setSeeMoreButton] = useState(false);
  const [IsTextShown, setIsTextShown] = useState(false);
  const [numLines, setNumLines] = useState<number | undefined>(undefined);

  const onTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
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
    <RenderContainer IsTextShown={IsTextShown} style={containerStyle}>
      <GlobalText
        onTextLayout={onTextLayout}
        numberOfLines={numLines}
        ellipsizeMode="tail"
        style={[styles.ellipsisText, style]}
        {...props}>
        {children} {IsTextShown && ' '}
      </GlobalText>

      {SeeMoreButton && (
        <GlobalText
          onPress={toggleText}
          size={buttonSize}
          type={buttonType}
          color={buttonColor}
          textAlign={buttonAlign}
          style={[styles.button, buttonStyle]}>
          {IsTextShown ? lessText : moreText}
        </GlobalText>
      )}
    </RenderContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ellipsisText: {
    flex: 1,
  },
  button: {
    paddingTop: ms(2),
  },
});
