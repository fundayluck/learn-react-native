import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.counting) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, 0);

  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          runMyReducer({ counting: "increase" });
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          runMyReducer({ counting: "decrease" });
        }}
      />
      <Text>Current Count: {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
