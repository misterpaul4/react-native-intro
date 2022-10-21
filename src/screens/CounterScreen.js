import React, { useReducer, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { globalStyles } from "../utils/globalStyles";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const reducer = (state, action) => {
  switch (action) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <Text style={globalStyles.header}>Counter Screen</Text>
      <Button title="Increase" onPress={() => dispatch(INCREASE)} />

      <Button title="Decrease" onPress={() => dispatch(DECREASE)} />

      <Text style={styles.text}>Value = {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 30,
  },
});

export default CounterScreen;
