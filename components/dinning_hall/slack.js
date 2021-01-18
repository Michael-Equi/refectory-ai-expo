import React from 'react';
import {View, Text, TextInput, Button, SafeAreaView} from 'react-native';
import Clipboard from 'expo-clipboard';

const Slack = ({routes, navigation}) => {
  const string = "Slack Page\nfdsfdsfds\nfsdfds";
  return (
    <SafeAreaView>
      <TextInput multiline numberOfLines={10} style={{backgroundColor: 'grey', borderRadius: 20, margin: 20, padding: 30, paddingTop: 20}}>
        {string}
      </TextInput>
      <Button title={"Copy"} onPress={() => {Clipboard.setString(string)}}/>
      <Button title={"Back"} onPress={() => {navigation.pop()}}/>
    </SafeAreaView>
  )
}

export default Slack;
