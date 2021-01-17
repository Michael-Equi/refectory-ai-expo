import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {MyContext} from "../../context";

const DinningHall = () => {
  const context = useContext(MyContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dinning Hall</Text>
    </View>
  )
}

export default DinningHall;
