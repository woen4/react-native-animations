import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default {
  window: {
    width,
    height,
  },
  tabBarHeight: 50,
  isSmallDevice: width < 375,
};
