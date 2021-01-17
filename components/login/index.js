import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import image from '../../assets/login_page_image.png';

import styles from '../../styles';

const Login = ({navigation}) => {
  const translateAnim = useRef(new Animated.Value(-860)).current;
  const translateTo = (x,  time= 3000) => (
    Animated.timing(translateAnim, {
      toValue: x,
      duration: time,
      useNativeDriver: true,
    }));

  useEffect(() => {
    Animated.sequence([
      translateTo(-860, 0),
      translateTo(-615),
      translateTo(-360),
      translateTo(-110)
    ]).start();
  }, [translateAnim, translateTo])

  return (
    <View>
      <Animated.View style={{transform: [{translateX: translateAnim}]}}>
        <ImageBackground source={image} style={{
          flex: 1,
          resizeMode: "cover",
          width: 1380,
          height: 808,
          transform: [{translateX: -100,}]}}>
        </ImageBackground>
      </Animated.View>
      <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
        <Text> Hello </Text>
        <Text> Hello </Text>
        <Text> Hello </Text>
      </View>
      <Text style={{...styles.logo}}>Refectory</Text>
      <TouchableOpacity style={{...styles.button}} title={"Dinning Hall List"} onPress={()=>navigation.navigate("Dinning Hall List")}>
        <Text style={{...styles.boldBody, color: 'white'}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;
