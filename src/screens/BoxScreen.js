import { StyleSheet, Text, View } from "react-native";
import { randomColor } from "../utils/color";
import { globalStyles } from "../utils/globalStyles";

const BoxScreen = () => {
  const Box = (text) => (
    <View
      style={{ ...styles.child, ...styles.backgroundColor(randomColor()) }}
      key={text}
    >
      <Text style={styles.abs}>* *</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  return (
    <View style={styles.view}>
      <Text style={globalStyles.header}>Box Screen</Text>

      <View style={styles.flexed}>{[1, 2, 3, 4, 5].map((v) => Box(v))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderColor: "black",
  },
  text: {
    color: "yellow",
    fontSize: 30,
    textAlign: "center",
  },
  flexed: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  child: {
    padding: 50,
    margin: 5,
    borderWidth: 1,
    flex: 1,
    position: "relative",
  },
  abs: {
    position: "absolute",
    bottom: 3,
    right: 10,
    color: "white",
  },
  backgroundColor: (color) => ({ backgroundColor: color }),
});

export default BoxScreen;
