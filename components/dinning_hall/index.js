import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Button, TouchableOpacity} from 'react-native';

import {MyContext} from "../../context";
import AppLoading from "expo-app-loading";
import FoodCard from "./foodCards";
import styles from '../../styles';
import * as colors from '../../styles/colors';

const DinningHall = ({route, navigation}) => {
  const context = useContext(MyContext);
  const db = context.dbh;
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState({items: []});
  const [section, setSection] = useState(1);

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

  const generateFoodCards = () => {
    switch (section){
      case 1:
        return data.section1.map((dish, idx) => (
          <FoodCard {...dish} pressedHandler={foodPressedHandler} selected={selected.items.includes(dish.name)} key={idx}/>
          ));
      case 2:
        return data.section2.map((dish, idx) => (
          <FoodCard {...dish} pressedHandler={foodPressedHandler} selected={selected.items.includes(dish.name)} key={idx}/>
        ));
      case 3:
        return data.section3.map((dish, idx) => (
          <FoodCard {...dish} pressedHandler={foodPressedHandler} selected={selected.items.includes(dish.name)} key={idx}/>
        ));
    }

  }

  if(data === null){
    return (
      // <AppLoading/>
      <View/>
    )
  }

  const getTextDecor = (i) => (section === i ? 'underline' : 'none');
  const getTextColor = (i) => (section === i ? colors.primary : colors.gray3);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dinningHallHeaderContainer}>
        <Text style={{...styles.heading1, fontFamily: 'Tangerine_400Regular', paddingRight: 10}}>{route.params.name}</Text>
        <View style={styles.dinningHallSectionSelectorContainer}>
          <TouchableOpacity style={styles.centered} onPress={() => {setSection(1)}}>
            <Text style={{ ...styles.body, textDecorationLine: getTextDecor(1), color: getTextColor(1)}}>Section 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered} onPress={() => {setSection(2)}}>
            <Text style={{ ...styles.body, textDecorationLine: getTextDecor(2), color: getTextColor(2)}}>Section 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centered} onPress={() => {setSection(3)}}>
            <Text style={{ ...styles.body, textDecorationLine: getTextDecor(3), color: getTextColor(3)}}>Section 3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalRule}/>
      </View>
      <ScrollView style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={styles.dinningHallScrollContainer}>
          {
            generateFoodCards()
          }
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.slackButton} onPress={() => {navigation.navigate("Slack", {items: selected.items})}}>
        <Text style={{padding: 20, marginBottom: 20, ...styles.boldBody, color: 'white'}}>Send to Slack</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DinningHall;
