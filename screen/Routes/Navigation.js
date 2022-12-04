import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../Auth/DashBoard';
import SignIn from '../Auth/SignIn';
import Login from '../Auth/Login'
import ShowData from '../Auth/screens/ShowData';
import RemoteConfigDisplay from '../Auth/screens/RemoteConfigDisplay';
import CrashApplicationTest from '../Auth/screens/CrashApplicationTest';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="ShowData" component={ShowData}/>
        <Stack.Screen name="RemoteConfigDisplay" component={RemoteConfigDisplay}/>
        <Stack.Screen name="CrashApplicationTest" component={CrashApplicationTest}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
