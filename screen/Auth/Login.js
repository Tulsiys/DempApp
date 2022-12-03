import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import TextInputFiled from "../Component/TextInputFiled";
import { useForm, Controller } from "react-hook-form";
import { rules } from "../utils/Rules";
import { useNavigation } from "@react-navigation/native";
import { HeartLogo } from "../assets/Images/SVG";

export default function Login() {
  const navigation = useNavigation();
  

  async function onSignIn(user) {
    console.log('user8989=======',user);
  }

  
  const Data = [
    {
      id: 1,
      UserName: "Viaksh@gmail.com",
      Password: "vikash",
    },
    {
      id: 2,
      UserName: "Mahadev",
      Password: "Mahadev@#$86",
    },
  ];
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });


  const onSubmit = (data) => {
    const result = Data.find(
      (e) => e.UserName === data.UserName && e.Password === data.Password
    );
    if (result) {
      navigation.navigate("DashBoard");
    } else {
      alert("Wrong UserName & Password");
    }
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.loginButtonStyles, { color: "white" }]}>
            LogInScreen
          </Text>
          <HeartLogo width={20} height={20} />
        </View>
        <TextInputFiled
          labelName={"UserName"}
          control={control}
          name={"UserName"}
          error={errors?.email?.message}
          rules={rules?.firstName}
          labelStyle={{ color: "grey", fontSize: 24, fontWeight: "800" }}
        />
        <TextInputFiled
          labelName={"Password"}
          control={control}
          name={"Password"}
          error={errors?.Password?.message}
          rules={rules?.password}
          labelStyle={{ color: "grey", fontSize: 24, fontWeight: "800" }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.loginButtonStyles}>Log_In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            onSignIn({
              username: 'Mahadev',
              email: 'Mahadev@#$86',
            })
          }
        >
          <Text style={styles.loginButtonStyles}>Sign In</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#0e101c",
  },
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    padding: 8,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  loginButtonStyles: { fontSize: 22, fontWeight: "bold" },
});
