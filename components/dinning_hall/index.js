import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {MyContext} from "../../context";
import AppLoading from "expo-app-loading";

const DinningHall = ({route, navigation}) => {
  const context = useContext(MyContext);
  const db = context.dbh;
  const [data, setData] = useState(null);

  useEffect(() => {
    const doc = db.collection("streams").doc(route.params.streamid);
    const unsubscribe = doc.onSnapshot(snap => {
      setData(snap.data());
    });
    return () => unsubscribe()
  }, [db]);

  if(data === null){
    return (
      <AppLoading/>
    )
  }

  console.log(data);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dinning Hall</Text>
      <Text>{route.params.streamid}</Text>
    </View>
  )
}

export default DinningHall;
