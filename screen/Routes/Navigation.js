import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../Auth/DashBoard';
import SignIn from '../Auth/SignIn';
import ShowData from '../Auth/screens/showData';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="ShowData" component={ShowData}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
