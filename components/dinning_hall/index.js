import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {MyContext} from "../../context";

const DinningHall = ({route, navigation}) => {
  const context = useContext(MyContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dinning Hall</Text>
      <Text>{route.params.streamid}</Text>
    </View>
  )
}

export default DinningHall;
