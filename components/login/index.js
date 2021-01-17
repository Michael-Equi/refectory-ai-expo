import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';

import styles from '../../styles';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.logo}>Refectory</Text>
      <Button title={"Dinning Hall List"} onPress={()=>navigation.navigate("Dinning Hall List")}/>
    </View>
  )
}

export default Login;
