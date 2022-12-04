import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
// import thunkstore from './screen/reduxThunk/thunkstore';
import sagastore from "./screen/reduxSaga/sagastore";
import Navigation from "./screen/Routes/Navigation";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
      <Provider store={sagastore}>
        <Navigation />
      </Provider>
  );
}
