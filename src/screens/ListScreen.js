import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const listScreen = () => {
  const friends = [
    { name: "Afan", age: 21 },
    { name: "Dayu", age: 32 },
    { name: "Laksono", age: 12 },
    { name: "Sindi", age: 51 },
    { name: "Evina", age: 34 },
    { name: "Diti", age: 12 },
    { name: "joko", age: 14 },
    { name: "Sapto", age: 70 },
    { name: "Sabto", age: 80 },
    { name: "Bagus", age: 27 },
    { name: "blakepau", age: 12 },
  ];
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default listScreen;
