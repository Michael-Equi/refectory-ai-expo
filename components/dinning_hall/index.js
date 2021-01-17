import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import {MyContext} from "../../context";
import AppLoading from "expo-app-loading";
import FoodCard from "./foodCards";
import styles from '../../styles';

const DinningHall = ({route, navigation}) => {
  const context = useContext(MyContext);
  const db = context.dbh;
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState({items: []});

  useEffect(() => {
    const doc = db.collection("streams").doc(route.params.streamid);
    const unsubscribe = doc.onSnapshot(snap => {
      setData(snap.data());
    });
    return () => unsubscribe()
  }, [db]);

  const foodPressedHandler = (name) => {
    const items = selected.items;
    if(selected.items.includes(name)){
      const index = selected.items.indexOf(name);
      items.splice(index, 1);
    } else {
      items.push(name);
    }
    setSelected({items: items});
  }

  if(data === null){
    return (
      <AppLoading/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Dinning Hall</Text>
        <Text>{route.params.streamid}</Text>
      </View>
      <ScrollView style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} round={dish.round}
                                                     pressedHandler={foodPressedHandler} selected={selected.items.includes(dish.name)} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={dish.round}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
        </View>
      </ScrollView>
      <View>
        <Text>Dinning Hall</Text>
        <Text>{route.params.streamid}</Text>
      </View>
    </SafeAreaView>
  )
}

export default DinningHall;
