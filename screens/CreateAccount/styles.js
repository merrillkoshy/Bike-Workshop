import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  materialIconTextbox: {
    height: 42,
    width: 307,
    marginTop: 10,
    marginLeft: 37
  },
  image1: {
    width: 240,
    height: 150,
    alignSelf: "center"
  },
  matButton: {
    height: 40,
    width: 120,
    marginTop: 50,
    alignSelf: "center"
  },
  termsConditions: {
    // fontFamily(.*)",
    color: "rgba(255,40,0,1)",
    marginTop: 54,
    alignSelf: "center"
  },

  inputStyle: {
    color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8
  },
  iconStyle: {
    color: "rgba(255,40,0,1)",
    fontSize: 24,
    paddingLeft: 8
  },
  inputBlock: {
    height: 42,
    width: 307,
    marginTop: 10,
    marginLeft: 37,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  }
});