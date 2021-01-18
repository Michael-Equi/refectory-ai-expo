import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

import styles from '../../styles';

const Card = ({name, icon, streamid, navigation}) => {
  return(
    <TouchableOpacity style={styles.listCard} onPress={()=>navigation.navigate("Dinning Hall", {name, icon, streamid})}>
      <Image source={{uri: icon}} style={styles.cardImage}/>
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
}

export default Card;
