import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../utils/globalStyles";

const InputScreen = () => {
  const [value, setValue] = useState("");

  return (
    <View>
      <Text style={globalStyles.header}>Input Screen</Text>

      <Text style={{ textAlign: "center", fontSize: 15 }}>Enter Password:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={setValue}
      />

      {value && (value.length < 4 || value.length > 20) && (
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "red",
          }}
        >
          Password must be between 4 & 20 characters
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default InputScreen;
