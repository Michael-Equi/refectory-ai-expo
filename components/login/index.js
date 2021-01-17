import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Login </Text>
      <Button title={"Dinning Hall List"} onPress={()=>navigation.navigate("Dinning Hall List")}/>
    </View>
  )
}

export default Login;
