import { StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  materialIconTextbox: {
    height: 42,
    width: 307,
    marginTop: 10,
    marginLeft: 37,
  },
  image1: {
    marginTop: 50,
    width: 240,
    height: 150,
    alignSelf: "center",
  },
  materialIconTextboxStack: {
    width: 302,
    height: 255,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  materialButtonPink: {
    height: 40,
    width: 120,
    marginTop: 50,
    alignSelf: "center",
  },
  loremIpsum: {
    // fontFamily(.*)",
    color: "rgba(0,0,0,1)",
    marginTop: 49,
    alignSelf: "center",
  },
  createNow: {
    // fontFamily(.*)",
    color: theme?.PRIMARY_COLOR,
    marginTop: 3,
    alignSelf: "center",
  },

  inputStyle: {
    color: theme?.TEXT_INPUT,
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
  },
  iconStyle: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 24,
    paddingLeft: 8,
  },
  inputBlock: {
    height: 42,
    width: 307,
    marginTop: 20,
    marginLeft: 37,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
});
