import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height / 2 + 5,

    marginTop: 10,
    marginLeft: 18,
    marginRight: 18
  },
  text: {
    // fontFamily(.*)",
    color: "#121212",
    fontSize: 20,
    marginTop: -370,
    marginLeft: 32
  },
  location: {
    // fontFamily(.*)",
    color: "#121212",
    fontSize: 16,
    marginTop: 10
  },
  materialUnderlineTextbox: {
    width: Dimensions.get("window").width / 2 + 90,
    alignSelf: "center",
    fontSize: 8,
    marginLeft: 14,

    marginTop: 10
  },
  actionContainer: {
    marginTop: Dimensions.get("window").height / 2 + 25
  },
  locationRow: {
    flexDirection: "row",
    alignSelf: "center"
  },
  loremIpsum: {
    // fontFamily(.*)",
    color: "#121212",
    marginTop: 20
  },
  materialUnderlineTextbox1: {
    width: 120,
    marginTop: 20,
    marginLeft: 7,
    alignSelf: "center"
  },
  loremIpsumRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 31,
    marginRight: 18
  },
  materialButtonPink1: {
    height: 40,
    width: 120,
    marginTop: 28,
    alignSelf: "center"
  },
  header1: {
    height: 46,
    marginTop: -614
  },
  image1: {
    width: 65,
    height: 65,
    marginTop: 0,
    marginLeft: 10
  }
});
