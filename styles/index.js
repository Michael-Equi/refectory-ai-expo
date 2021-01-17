import {StyleSheet} from "react-native";

// Colors
const primary = '#424B54';
const secondary = '#93A8AC';
const pink1 = '#E2B4BD';
const pink2 = '#9B6A6C';
const gray1 = '#333333';
const gray2 = '#4F4F4F';
const gray3 = '#828282';
const gray4 = '#BDBDBD';
const gray5 = '#E0E0E0';
const gray6 = '#F2F2F2';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonts: fonts,
  logo: {
    fontFamily: 'Tangerine_400Regular',
    fontSize: 72,
    margin: 50,
    color: '#000'
  },
  button: {
    color: primary,
    borderRadius: 100,
  }
});

const fonts = {
  heading1: {
    fontFamily: 'SourceSansPro_600SemiBold',
    fontSize: 32,
    color: gray2
  },
  heading2: {
    fontFamily: 'SourceSansPro_600SemiBold',
    fontSize: 22,
    color: gray2
  },
  subheading1: {
    fontFamily: 'SourceSansPro_600SemiBold',
    fontSize: 18,
    color: gray3
  },
  subheading2: {
    fontFamily: 'SourceSansPro_200ExtraLight',
    fontSize: 18,
    color: gray3
  },
  boldBody: {
    fontFamily: 'SourceSansPro_600SemiBold',
    fontSize: 16,
    color: gray1
  },
  body: {
    fontFamily: 'SourceSansPro_400Regular',
    fontSize: 16,
    color: gray1
  },
  secondary: {
    fontFamily: 'SourceSansPro_400Regular',
    fontSize: 14,
    color: gray4
  },
  caption: {
    fontFamily: 'SourceSansPro_400Regular',
    fontSize: 12,
    color: gray4
  },
}
