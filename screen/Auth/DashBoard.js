import { View, Text, SafeAreaView,ScrollView,StyleSheet, Button } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import fetchData from '../reduxThunk/Auth/action';
import fetchAction from '../reduxSaga/Auth/AuthAction';
import routes from '../navigation/routes/route';

export default function DashBoard({ navigation }) {
  const dispatch = useDispatch();

  const fetchResponse = {
    success: (result) => {
      console.log('result', result.data)
    },
    error: (err) => {
      console.log('error', err);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
        {/* ///------REDUX___SAGA---- */}
        <Button title="Go_Back" onPress={() => navigation.goBack()} />
        <Button title="Dispach_Action" onPress={() => dispatch(fetchAction())} />
        <Button title="Move_to_ShowData_Screen" onPress={() => navigation.navigate('ShowData')} />
        <Button title="RemoteConfig" onPress={() => navigation.navigate(routes.RemoteConfigDisplay)} />
        <Button title="Crash_Application" onPress={() => navigation.navigate(routes.CrashApplicationTest)} />


        {/* ///------REDUX___THUNK---- */}
        {/* <Text style={{ color: 'red' }}>App</Text>
        <Button title="Go_Back" onPress={() => navigation.goBack()} />
        <Button title="Dispach_Action" onPress={() => dispatch(fetchData(fetchResponse))} />
        <Button title="Move_to_ShowData_Screen" onPress={() => navigation.navigate('ShowData')} /> */}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})