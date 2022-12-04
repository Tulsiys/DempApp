import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import crashlytics from "@react-native-firebase/crashlytics";
import { useNavigation } from '@react-navigation/native';

const CrashApplicationTest = () => {
    const navigation = useNavigation();
    async function crashTest(){
      await crashlytics().crash();
    }
    return (
        <View style={styles.container}>
            <Text>CrashApplicationTest</Text>
            <Button title='Crash_Application' onPress={crashTest}/>
            <View style={styles.buttonStyle}>
            <Button title='Go_Back' onPress={()=> navigation.goBack()}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle:{
        marginTop:20
    }
});

export default CrashApplicationTest;
