import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from './screen/Auth/DashBoard';
import SignIn from './screen/Auth/SignIn';
import { Provider } from 'react-redux';
import ShowData from './screen/Auth/screens/ShowData';
// import thunkstore from './screen/reduxThunk/thunkstore';
import sagastore from './screen/reduxSaga/sagastore';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={sagastore}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="ShowData" component={ShowData}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
