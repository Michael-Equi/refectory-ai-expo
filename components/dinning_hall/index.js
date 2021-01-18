import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Button, TouchableOpacity} from 'react-native';

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
    <SafeAreaView style={{...styles.container, flex: 1, flexDirection: 'column'}}>
      <View style={{marginTop: 10, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center'}}>
        <Text>{route.params.name}</Text>
        <View style={{height: 40, alignSelf: 'stretch', flexDirection: "row", margin: 30, marginTop: 10, marginBottom: 0, justifyContent: 'space-between'}}>
          <Button title={"Section 1"}/>
          <Button title={"Section 2"}/>
          <Button title={"Section 3"}/>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, alignSelf: 'stretch', margin: 50, marginTop: 10, marginBottom: 10}}/>
      </View>
      <ScrollView style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={{flex: 1, flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-between', alignItems: "center"}}>
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} round={dish.round}
                                                     pressedHandler={foodPressedHandler} selected={selected.items.includes(dish.name)} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={dish.round}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={dish.round}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={dish.round}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={true}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={false}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={true}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={false}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={false}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={true}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
          {data.dishes.map((dish, idx) => (<FoodCard dish={dish.name} image={dish.image}
                                                     content={dish.contents} selected={selected.items.includes(dish.name)} round={false}
                                                     pressedHandler={foodPressedHandler} key={idx}/>))}
        </View>
      </ScrollView>
      <TouchableOpacity style={{position: 'absolute', bottom: 0, margin: 50, height: 50, backgroundColor: 'red',
        alignSelf: 'flex-end', justifyContent: 'center', borderRadius: 20, transform: [{translateX: -30}]}}
      onPress={() => {navigation.navigate("Slack")}}>
        <Text style={{padding: 20, marginBottom: 20}}>Send to Slack</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DinningHall;
