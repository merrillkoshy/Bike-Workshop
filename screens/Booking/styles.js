import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollArea: {
    alignSelf: "stretch",

    marginTop: 22,
    marginLeft: 22,
    marginRight: 22,
  },
  scrollArea_contentContainerStyle: {
    alignSelf: "center",
  },
  infoCard: {
    marginTop: 20,
    width: Dimensions.get("window").width / 1.1,
    alignSelf: "center",
    paddingLeft: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  iconStyle: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 24,
    paddingLeft: 8,
  },
  inputBlock: {
    height: 42,
    width: Dimensions.get("window").width / 1.1,
    marginTop: 10,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
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
  labels: {
    flexWrap: "wrap",
    marginLeft: 16,
    color: theme?.TEXT_LIGHT,
    width: Dimensions.get("window").width / 2,
  },

  text: {
    // fontFamily(.*)",
    color: theme?.TEXT_LIGHT,
    fontSize: 22,
    alignSelf: "center",
    flexWrap: "wrap",
    width: Dimensions.get("window").width / 1.5,
    textAlign: "center",
  },
  loremIpsum: {
    top: 10,
    left: 85,
    position: "absolute",
    // fontFamily(.*)",
    color: theme?.TEXT_LIGHT,
  },
  textStack: {
    width: 86,
    height: 25,
    marginTop: -572,
    marginLeft: 25,
  },
  header: {
    height: 46,
    marginTop: -93,
  },
  image1: {
    width: 65,
    height: 65,
    marginTop: 0,
    marginLeft: 10,
  },
  cardItemImagePlace: {
    flex: 1,
    resizeMode: "contain",
    borderRadius: 15,
  },
  imageWrap: {
    marginTop: 20,
    height: Dimensions.get("window").width / 2.2,
  },
  contentContainer: {
    flexDirection: "column",
    flex: 1,
  },
  descriptionPara: {
    flexWrap: "wrap",
  },
  matButton: {
    color: "#FFFFFF",
    height: 40,
    width: 150,
    marginTop: 30,
    alignSelf: "center",
  },
});
