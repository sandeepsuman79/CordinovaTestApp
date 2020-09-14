import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const STANDARD_WIDTH = 375;
const CURRENT_WIDTH = width;
const K = CURRENT_WIDTH / STANDARD_WIDTH;
const USE_FOR_BIGGER_SIZE = true;
export function dynamicSize(size) {
  return K * size;
}
export function getFontSize(size) {
  if (USE_FOR_BIGGER_SIZE || CURRENT_WIDTH < STANDARD_WIDTH) {
    const newSize = dynamicSize(size);
    return newSize;
  }
  return size;
}

export const themeColor = '#d73318';
export const darkColor = '#7a7a7a';

export function fontFamily(fontType) {
  if (fontType == 'semibold') {
    return 'Montserrat-SemiBold';
  } else if (fontType == 'bold') {
    return 'Montserrat-Bold';
  }
  return 'Montserrat-Regular';
}
