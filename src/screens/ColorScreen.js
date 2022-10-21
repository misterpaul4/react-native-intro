import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { randomColor } from "../utils/color";
import { globalStyles } from "../utils/globalStyles";

const style = StyleSheet.create({
  x: {
    color: "red",
    fontSize: 30,
  },
});

const SecondScreen = () => {
  const [color, setColor] = useState([]);

  return (
    <View>
      <Text style={globalStyles.header}>Color Screen</Text>

      <Button
        title="Generate Color"
        onPress={() => setColor((colors) => [...colors, randomColor()])}
      />

      <FlatList
        data={color}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item,
              height: 100,
              width: 100,
              margin: 5,
            }}
          />
        )}
      />
    </View>
  );
};

export default SecondScreen;
