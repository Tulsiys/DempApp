import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import fetchData from '../reduxThunk/Auth/action';
import fetchAction from '../reduxSaga/Auth/AuthAction';

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
    <SafeAreaView>
      <View>

        {/* ///------REDUX___SAGA---- */}
        <Text style={{ color: 'red' }}>App</Text>
        <Button title="Go_Back" onPress={() => navigation.goBack()} />
        <Button title="Dispach_Action" onPress={() => dispatch(fetchAction())} />
        <Button title="Move_to_ShowData_Screen" onPress={() => navigation.navigate('ShowData')} />

        {/* ///------REDUX___THUNK---- */}
        {/* <Text style={{ color: 'red' }}>App</Text>
        <Button title="Go_Back" onPress={() => navigation.goBack()} />
        <Button title="Dispach_Action" onPress={() => dispatch(fetchData(fetchResponse))} />
        <Button title="Move_to_ShowData_Screen" onPress={() => navigation.navigate('ShowData')} /> */}


      </View>
    </SafeAreaView>
  );
}