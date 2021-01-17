import {StyleSheet} from "react-native";
import * as colors  from './colors';
import fonts from './fonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'Tangerine_400Regular',
    fontSize: 72,
    margin: 50,
    color: '#000'
  },
  button: {
    margin: 75,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  ...fonts
});
