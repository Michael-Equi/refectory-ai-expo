import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import image from '../../assets/login_page_image.png';
import { StatusBar } from 'expo-status-bar';

import styles from '../../styles';

const Login = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.loginBackgroundImage}/>
      <Text style={styles.logo}>Refectory</Text>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.button} title={"Dinning Hall List"} onPress={()=>navigation.navigate("Dinning Hall List")}>
          <Text style={{...styles.boldBody, color: 'white'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </View>
  )
}

export default Login;
