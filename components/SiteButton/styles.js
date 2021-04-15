import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    backgroundColor: theme?.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: theme?.THEME_LIGHT,
    fontFamily: "Ubuntu-R",
  },
});
