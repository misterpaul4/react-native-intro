import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import ColorScreen from "./src/screens/ColorScreen";
import { paths } from "./src/utils/paths";
import ColorIntensity from "./src/screens/ColorIntensity";
import InputScreen from "./src/screens/InputScreen";
import BoxScreen from "./src/screens/BoxScreen";

// used to show different screens to user
const navigator = createStackNavigator(
  {
    [paths.home]: HomeScreen,
    [paths.other]: ColorScreen,
    [paths.list]: ListScreen,
    [paths.imagescreen]: ImageScreen,
    [paths.counterScreen]: CounterScreen,
    [paths.colorIntensity]: ColorIntensity,
    [paths.inputScreen]: InputScreen,
    [paths.boxScreen]: BoxScreen,
  },
  {
    initialRouteName: paths.home,
    defaultNavigationOptions: {
      title: "Introduction to React Native",
    },
  }
);

export default createAppContainer(navigator);
