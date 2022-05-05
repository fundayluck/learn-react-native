import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {password.length < 5 ? (
        <Text>Password must be 5 characters long</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: { margin: 15, borderColor: "black", borderWidth: 1 },
});

export default PasswordScreen;
