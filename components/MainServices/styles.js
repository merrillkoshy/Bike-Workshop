import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",

    overflow: "hidden",
  },
  cardItemImagePlace: {
    minHeight: 150,
    borderRadius: 20,
    flex: 1,
  },
  serviceCards: {
    flex: 1,
    borderColor: "#000000",
    borderWidth: 2,
    width: Dimensions.get("window").width / 1.3,
    minHeight: 150,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    left: 0,
    right: 0,
  },
  bodyContent: {
    padding: 10,
    paddingTop: 12,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    justifyContent: "center",
    backgroundColor: "rgba(4,4,4,0.6)",
  },
  titleStyle: {
    textTransform: "capitalize",
    fontSize: 22,
    color: theme?.TEXT_DARK,
    paddingBottom: 12,
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
