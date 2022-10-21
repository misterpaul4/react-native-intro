import React from "react";
import { View, Text } from "react-native";
import ImageDetail from "../components/ImageDetail";
import beach from "../../assets/beach.jpg";
import forest from "../../assets/forest.jpg";
import mountain from "../../assets/mountain.jpg";
import { globalStyles } from "../utils/globalStyles";

const ImageScreen = () => {
  const { header } = globalStyles;
  return (
    <View>
      <Text style={header}>Image Screen</Text>

      <ImageDetail image={forest} name="image of forest" />
      <ImageDetail image={beach} name="image of beach" />
      <ImageDetail image={mountain} name="image of mountain" />
    </View>
  );
};

export default ImageScreen;
