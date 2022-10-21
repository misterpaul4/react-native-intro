import { Text, View, Image, StyleSheet } from "react-native";

const ImageDetail = ({ image, name }) => {
  return (
    <View style={styles.container}>
      {/* source={require(path)} for imports */}
      <Image source={image} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: 20,
  },
  bordered: {
    borderWidth: 2,
  },
});

export default ImageDetail;
