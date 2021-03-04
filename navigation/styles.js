import { StyleSheet } from "react-native";
import theme from "../appStyles";

export default StyleSheet.create({
  materialButtonTransparentHamburger: {
    height: 36,
    width: 36,
    backgroundColor: theme?.THEME_LIGHT,
    position: "absolute",
    right: 20
  }
});
