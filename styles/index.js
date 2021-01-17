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
    margin: 90,
    color: '#000'
  },
  loginBackgroundImage : {
    width: 1380,
    height: 808,
    position: 'absolute',
    transform: [ {translateX: -480}, {translateY: 0}]},
  loginButtonContainer: {
    alignSelf: 'stretch',
    backgroundColor: "white",
    borderRadius: 50, height: 200,
    transform: [{translateY: 30}],
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 20,
    marginBottom: 50,
    height: 70,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  listCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'stretch',
    margin:40,
    padding: 10
  },
  cardImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    margin: 0,
    borderRadius: 5
  },
  cardText: {
    fontFamily: 'Tangerine_400Regular',
    fontSize: 42,
    marginLeft: 25,
    paddingRight: 10
  },
  circularButton: {
    width: 80,
    height: 80,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 20
  },
  centeredPlus: {
    color: 'white',
    fontSize: 72,
    margin: 0,
    padding: 0,
    paddingBottom: 90,
    paddingLeft: 2.5
  },
  ...fonts
});
