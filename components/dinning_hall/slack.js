import React, {useRef} from 'react';
import {View, Text, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import Clipboard from 'expo-clipboard';
import styles from "../../styles";
import * as colors from "../../styles/colors";

const Slack = ({route, navigation}) => {
  const textInput = useRef();
  const items = route.params.items;
  const string = "May I have the following meal saved?\n" + "\n" + items.map((item) => (` -> ${item}\n`))  + "\n" + "Thanks!\n" + "\n" + "* sent with Refectory";

  return (
    <SafeAreaView style={{...styles.centered, flex: 1, justifyContent: 'space-between'}}>
      <TextInput ref={textInput} multiline numberOfLines={10} style={styles.textInput}>
        {string}
      </TextInput>
      <View>
        <TouchableOpacity style={{...styles.button, marginBottom: 10}} title={"Copy"} onPress={() => {Clipboard.setString(string)}}>
          <Text style={{...styles.boldBody, color: 'white'}}>Copy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.button, marginTop: 10, borderColor: colors.primary, borderWidth: 2, backgroundColor: colors.secondary}} title={"Back"} onPress={() => {navigation.pop()}}>
          <Text style={{...styles.boldBody, color: 'black'}}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Slack;
