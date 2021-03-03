import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    width: 375,
    height: 56,
    marginTop: 684
  },
  scrollArea: {
    alignSelf: "stretch",

    marginTop: 22,
    marginLeft: 22,
    marginRight: 22
  },
  scrollArea_contentContainerStyle: {
    alignSelf: "center"
  },
  materialCardWithoutImage: {
    height: 95,
    alignSelf: "center",
    paddingLeft: 30
  },
  text: {
    top: 0,
    left: 0,
    position: "absolute",
    // fontFamily(.*)",
    color: "#121212",
    fontSize: 22,
    width: 86,
    height: 25
  },
  loremIpsum: {
    top: 10,
    left: 85,
    position: "absolute",
    // fontFamily(.*)",
    color: "#121212"
  },
  textStack: {
    width: 86,
    height: 25,
    marginTop: -572,
    marginLeft: 25
  },
  header: {
    height: 46,
    marginTop: -93
  },
  image1: {
    width: 65,
    height: 65,
    marginTop: 0,
    marginLeft: 10
  }
});
