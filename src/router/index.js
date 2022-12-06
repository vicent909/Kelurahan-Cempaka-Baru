import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Splash, Home, Document, DocumentDetail } from '../pages'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../component';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>} >
      <Tab.Screen name='Home' component={Home} options={{headerShown: false}} />
      <Tab.Screen name='Document' component={Document} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp" >
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
      <Stack.Screen name="DocumentDetail" component={DocumentDetail} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})