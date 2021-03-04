import { StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  image1: {
    width: 65,
    height: 65,
    marginTop: 0,
    marginLeft: 10
  },
  materialButtonTransparentHamburger: {
    height: 36,
    width: 36,
    backgroundColor: theme?.THEME_LIGHT,
    position: "absolute",
    right: 20
  }
});
