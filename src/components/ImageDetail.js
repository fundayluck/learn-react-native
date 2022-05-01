import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.img} />
      <Text>{props.title}</Text>
      <Text>Image Score - {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
