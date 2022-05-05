import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREAMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "red", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREAMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "green", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          runMyReducer({
            colorToChange: "green",
            amount: -1 * COLOR_INCREAMENT,
          })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "blue", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREAMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
