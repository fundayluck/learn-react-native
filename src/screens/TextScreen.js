import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Text>My Name is {input}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: { margin: 15, borderColor: "black", borderWidth: 1 },
});

export default TextScreen;
