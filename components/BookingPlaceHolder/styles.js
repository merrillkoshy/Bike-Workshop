import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 20,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: theme?.HASNAIN_GREY,
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },

  cardBody: {
    flex: 1,
    minHeight: 200,
    paddingTop: 50,
    borderRadius: 20,
    paddingBottom: 20,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    right: 0,
  },
  bodyContent: {
    height: 100,
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    backgroundColor: "rgba(4,4,4,0.6)",
  },
  titleStyle: {
    fontSize: 22,
    color: theme?.TEXT_DARK,
    paddingBottom: 12,
    textTransform: "capitalize",
  },
  subtitleStyle: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    lineHeight: 16,
    opacity: 0.5,
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
  },
  actionButton1: {
    padding: 8,
    height: 36,
  },
  actionText1: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    opacity: 0.9,
  },
  actionButton2: {
    padding: 8,
    height: 36,
  },
  actionText2: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    opacity: 0.9,
  },
});
