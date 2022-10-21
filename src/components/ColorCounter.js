import { Button, Text, View } from "react-native";
import { ColorPickerActions } from "../utils/actions";

const ColorCounter = ({ color, handler }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ textAlign: "center", fontSize: 20 }}>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={() => handler({ color, type: ColorPickerActions.INCREMENT })}
      />
      <Button
        title={`Less ${color}`}
        onPress={() => handler({ color, type: ColorPickerActions.DECREMENT })}
      />
    </View>
  );
};

export default ColorCounter;
