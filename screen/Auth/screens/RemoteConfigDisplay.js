import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import fetchRemoteConfig from "../../Component/remoteConfig/fetchRemoteConfig";
import Navigation from "../../Routes/Navigation";

const RemoteConfigDisplay = () => {
  const navigation = useNavigation();
	React.useEffect(() => {
		remoteConfigItems();
	},[])
  async function remoteConfigItems() {
    const response = await fetchRemoteConfig();
    console.log("fetchRemoteConfig-----",response?.snapshot.contact_no.asNumber());
  }
  return (
    <View style={styles.container}>
      <Text>fetchRemoteConfig</Text>
			<Button title='Remote_config' onPress={() => remoteConfigItems()}/>
      <View style={styles.buttonStyle}>
			<Button title='Go_Back' onPress={() => navigation.goBack()}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle:{
    marginTop:20
  }
});

export default RemoteConfigDisplay;
