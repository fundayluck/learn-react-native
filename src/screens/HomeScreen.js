import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Screen"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Screen"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Screen"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Screen"
      />
      <Button
        onPress={() => navigation.navigate("Password")}
        title="Go to Password Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default HomeScreen;
