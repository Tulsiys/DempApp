import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import TextInputFiled from '../Component/TextInputFiled';
import { rules } from '../utils/Rules';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => {
    alert(data);
    console.log(data);
  };

  const onError = (errors, e) => {
    return console.log(errors)
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={{marginHorizontal:20}} >
      <View style={{alignItems:'center'}}>
        <Text style={{color:'white',fontWeight:'800',fontSize:32,marginBottom:'10%'}}>Sign_In</Text>
      </View>
      <TextInputFiled
              labelName={"FirstName"}
              control={control}
              name={'FirstName'}
              error={errors?.FirstName?.message}
              rules={rules?.firstName}
      />
         <TextInputFiled
              labelName={"LastName"}
              control={control}
              name={'LastName'}
              error={errors?.LastName?.message}
              rules={rules?.lastName}
      />
         <TextInputFiled
              labelName={"Email"}
              control={control}
              name={'email'}
              error={errors?.email?.message}
              rules={rules?.email}
      />
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          title="Navigation"
          onPress={()=>navigation.navigate('DashBoard')}
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
}); 