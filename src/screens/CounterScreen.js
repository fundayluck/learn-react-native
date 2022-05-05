import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.countOn) {
    case "increase":
      return { ...state, count: state.count + action.counting };
    case "decrease":
      return { ...state, count: state.count - action.counting };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          runMyReducer({ countOn: "increase", counting: 1 });
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          runMyReducer({ countOn: "decrease", counting: 1 });
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
