import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import 'firebase/firestore';

import {firebaseConfig} from "../firebase";
import {MyContext} from "../context";

import Login from "./login";
import DinningHallList from "./dinning_hall_list";
import DinningHall from "./dinning_hall";

firebase.initializeApp(firebaseConfig);
const dbh = firebase.firestore();

const Stack = createStackNavigator();

const Routes = () => {
  const context = useContext(MyContext);
  if (context.dbh === null){context.setDbh(dbh);}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Dinning Hall List" component={DinningHallList} />
        <Stack.Screen name="Dinning Hall" component={DinningHall} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
