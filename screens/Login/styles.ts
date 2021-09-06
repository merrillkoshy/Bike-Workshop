import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  materialIconTextbox: {
    marginTop: 10,
    marginLeft: 37,
  },
  contentContainer: {
    backgroundColor: "rgba(255,255,255,0.7)",
    alignSelf: "center",
    borderRadius: 20,
    padding: 20,
  },
  image1: {
    width: 240,
    height: 150,
    alignSelf: "center",
  },
  materialIconTextboxStack: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  materialButtonPink: {
    fontFamily: "Ubuntu-R",
    padding: 10,
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
    fontFamily: "Ubuntu-R",
    color: theme?.TEXT_INPUT,
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 3,
    borderColor: theme?.PRIMARY_COLOR,
    paddingTop: 14,
    paddingBottom: 8,
    borderRadius: 10,
  },
  iconStyle: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 24,
    paddingLeft: 8,
  },
  inputBlock: {
    height: 40,
    width: Dimensions.get("window").width / 1.4,
    marginTop: 20,
    // backgroundColor: "rgba(255,255,255,0.6)",
    flexDirection: "row",
    alignItems: "center",
  },
});
