import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {MyContext} from "../../context";

const DinningHallList = ({navigation}) => {
  const context = useContext(MyContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dinning Hall List</Text>
      <Button title={"Dinning Hall"} onPress={()=>navigation.navigate("Dinning Hall")}/>
    </View>
  )
}

export default DinningHallList;
