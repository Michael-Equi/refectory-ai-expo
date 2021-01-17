import React, {useContext, useState, useEffect} from 'react';
import {View, ScrollView, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';

import {MyContext} from "../../context";
import Card from './card';
import styles from '../../styles';

const DinningHallList = ({navigation}) => {
  const context = useContext(MyContext);
  const [dinningHalls, setDinningHalls] = useState(null);


  useEffect(() => {
    if(dinningHalls === null){
      const db = context.dbh;
      const doc = db.collection("dinninghalls");
      doc.get().then((snapshot) => {
        const dinningHalls = snapshot.docs.map((doc) => (doc.data()));
        setDinningHalls({data: dinningHalls})
      }).catch(() => console.error('grocery-list-get-fail'));
    }
  }, [dinningHalls, setDinningHalls, context]);

  if(dinningHalls === null){
    return (
      <AppLoading/>
    )
  }
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <ScrollView style={{}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'top-center'}}>
          {dinningHalls.data.map((hall, index) => (<Card {...hall} navigation={navigation} key={index}/>))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.circularButton}>
        <Text style={styles.centeredPlus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DinningHallList;
