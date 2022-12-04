import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ShowData() {
  ///For REDUX_THUNK
  // const data = useSelector((state) => state?.fetchReducer?.fetchSuccess);

  ////FOR REDUX_SAGA
  const data = useSelector((state) => state?.fetch);


  console.log("8989998====", data);
  return (
    <SafeAreaView>
      <View>
        <Text>showData</Text>
      </View>
    </SafeAreaView>
  )
}