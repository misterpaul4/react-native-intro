import { useReducer, useState } from "react";
import { View, Text } from "react-native";
import { ColorPickerActions } from "../utils/actions";
import ColorCounter from "../components/ColorCounter";
import { globalStyles } from "../utils/globalStyles";

const initialValues = {
  Red: 0,
  Green: 0,
  Blue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ColorPickerActions.INCREMENT:
      const increase = state[action.color] + 15;
      return increase > 255 ? state : { ...state, [action.color]: increase };

    case ColorPickerActions.DECREMENT:
      const decrease = state[action.color] - 15;
      return decrease < 0 ? state : { ...state, [action.color]: decrease };

    default:
      return state;
  }
};

const ColorIntensity = () => {
  const [{ Blue, Green, Red }, dispatch] = useReducer(reducer, initialValues);

  return (
    <View>
      <Text style={globalStyles.header}>Color Intensity Screen</Text>

      <ColorCounter color="Red" handler={dispatch} />
      <ColorCounter color="Green" handler={dispatch} />
      <ColorCounter color="Blue" handler={dispatch} />

      <View
        style={{
          marginTop: 50,
          height: 150,
          width: "100%",
          backgroundColor: `rgb(${Red}, ${Green}, ${Blue})`,
        }}
      />
    </View>
  );
};

export default ColorIntensity;
