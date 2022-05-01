import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        img={require("../../assets/imagescreen/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        img={require("../../assets/imagescreen/beach.jpg")}
      />
      <ImageDetail
        title="Montain"
        img={require("../../assets/imagescreen/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
