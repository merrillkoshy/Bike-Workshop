import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,

    // alignSelf: "center",
    justifyContent: "center",
  },
  badge: {
    fontFamily: "Ubuntu-L",
    marginLeft: 10,
    padding: 5,
    fontSize: 10,
    borderRadius: 20,
    textTransform: "capitalize",
    color: theme.TEXT_DARK,
  },
  carding: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
  },
  inputWrapper: {
    height: Dimensions.get("window").height / 1.5,
    width: Dimensions.get("window").width / 1.4,
    // marginTop: 30,
    // alignSelf: "center",
    // justifyContent: "center",
  },
  infoCard: {
    marginTop: 30,

    // width: Dimensions.get("window").width / 1.5,

    // paddingLeft: 30,
  },
  inputBlock: {
    // width: Dimensions.get("window").width / 1.4,
    // marginTop: 20,
    // backgroundColor: "rgba(255,255,255,0.6)",
    // flexDirection: "row",
    // alignItems: "center",
    // borderRadius: 10,
  },
  listItemStyle: {
    flex: 1,

    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 18,
  },
  hideButton: {
    alignSelf: "center",
    borderRadius: 100,
  },
  closeIcon: {
    marginTop: 10,
    color: theme.TEXT_LIGHT,
    textDecorationLine: "underline",
  },
});
