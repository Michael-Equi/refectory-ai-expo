import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

import checkbox from '../../assets/Checkbox.png';

const FoodCard = ({name, image, contents, round, pressedHandler, selected}) => {

  let width = 130;
  let height = 130;
  let borderRadius = 500;
  let margin = 27;
  if(!round){
    width = 185;
    height = 130;
    borderRadius = 20;
    margin = 0;
  }

  return (
    <TouchableOpacity style={{borderRadius: borderRadius, backgroundColor: 'grey', width: width, height: height, margin: 10,
      marginLeft: 10 + margin, marginRight: 10 + margin,
      alignItems: 'center', justifyContent: 'center', shadowColor: 'grey', shadowOpacity: 0.6, shadowOffset: {
        height: 7
      }}}
                      onPress={() => pressedHandler(name)}>
      <Image source={{uri: image}} style={{width: width-10, height: height-10, borderRadius: borderRadius, }}/>
      {
        selected ?
          <Image source={checkbox} style={{width: 100, height: 100, position: 'absolute'}}/>
          : null
      }
    </TouchableOpacity>
  )
}

export default FoodCard;
