import {TextProps} from 'react-native';

export enum FontWeight {
  THIN = '100',
  EXTRA_LIGHT = '200',
  LIGHT = '300',
  REGULAR = '400',
  MEDIUM = '500',
  SEMI_BOLD = '600',
  BOLD = '700',
  EXTRA_BOLD = '800',
  BLACK = '900',
}

export type TTextAlign = 'left' | 'auto' | 'right' | 'center' | 'justify';

export interface IGlobalText extends TextProps {
  color?: string;
  size?: number;
  type?: FontWeight;
  textAlign?: TTextAlign;
}
