import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import { globalStyles } from "../utils/globalStyles";

const ListScreen = () => {
  const { text } = styles;
  const data = [
    "Consequat Lorem enim et eiusmod enim dolor.",
    "Eu labore officia aliquip labore aliquip adipisicing et laborum aliquip laboris ex elit.",
    "Cupidatat anim excepteur ut aliquip dolore id fugiat cillum.",
    "Ad magna anim incididunt exercitation qui officia.",
    "Sit magna aute do adipisicing ullamco qui aliqua incididunt mollit fugiat aliquip laborum occaecat.",
    "Eu fugiat Lorem sit labore.",
    "Proident excepteur laborum sint enim minim.",
    "Excepteur quis do velit nostrud quis.",
    "Est dolore do mollit velit esse qui nulla laborum duis.",
    "Quis deserunt ea adipisicing adipisicing consequat exercitation laboris sint ullamco voluptate reprehenderit non.",
  ];

  return (
    <>
      <Text style={globalStyles.header}>List Screen</Text>
      <FlatList
        // horizontal list and hide horizontal scollbar
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Text style={text}>
            {index + 1}. {item}
          </Text>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

export default ListScreen;
