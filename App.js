import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from './screen/Auth/DashBoard';
import { LogBox } from 'react-native';
import SignIn from './screen/Auth/SignIn';
import { Provider } from 'react-redux';
import Login from './screen/Auth/Login';
import ShowData from './screen/Auth/screens/ShowData';
// import thunkstore from './screen/reduxThunk/thunkstore';
import sagastore from './screen/reduxSaga/sagastore';
import crashlytics from '@react-native-firebase/crashlytics';

export default function App() {
  const Stack = createNativeStackNavigator();
  LogBox.ignoreAllLogs();
  React.useEffect(() => {
    crashlytics().crash();
  },[])
  return (
    <NavigationContainer>
      <Provider store={sagastore}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="DashBoard" component={DashBoard} />
          <Stack.Screen name="ShowData" component={ShowData} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
