import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../utils/globalStyles";
import { paths } from "../utils/paths";

const HomeScreen = ({ navigation }) => {
  const navigate = navigation.navigate;

  const { text, TO } = styles;
  const { header } = globalStyles;

  return (
    <View>
      <Text style={header}>Home Screen</Text>

      <Button onPress={() => navigate(paths.list)} title="Go to List Screen" />

      <Button
        title="Go to Image Screen"
        onPress={() => navigate(paths.imagescreen)}
      />

      <Button
        title="Go to Counter Screen"
        onPress={() => navigate(paths.counterScreen)}
      />

      <Button
        title="Go to Counter Intensity Screen"
        onPress={() => navigate(paths.colorIntensity)}
      />

      <Button
        title="Go to Input Screen"
        onPress={() => navigate(paths.inputScreen)}
      />

      <Button
        title="Go to Box Screen"
        onPress={() => navigate(paths.boxScreen)}
      />

      <TouchableOpacity
        onPress={() => navigate(paths.other)}
        style={{ marginTop: 10 }}
      >
        <Text style={{ ...TO, ...text }}>Go to Color Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  TO: {
    color: "blue",
  },
});

export default HomeScreen;
