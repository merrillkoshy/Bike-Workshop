import { StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  image1: {
    width: 50,
    height: 50,
    marginTop: 0,
    marginLeft: 15,
  },
  materialButtonTransparentHamburger: {
    height: 36,
    width: 36,
    backgroundColor: theme?.THEME_LIGHT,
    position: "absolute",
    right: 20,
  },
});
