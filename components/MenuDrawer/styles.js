import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  container: {
    flex: 1,
    // height: Dimensions.get("window").height - 80,
  },
  image1: {
    marginTop: 50,
    height: 150,
    alignSelf: "center",
  },
  itemList: {
    marginTop: 20,
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    flex: 3,

    flexDirection: "column",
    // position: "absolute", //Here is the trick
    // bottom: 0,
  },
  companyDetailsBlock: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
  },
  smBlock: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
  },
  locationBlock: {
    flexDirection: "column",
  },
  smWrapper: {
    flexDirection: "row",
    width: Dimensions.get("window").width / 1.6,
    flexWrap: "wrap",
    marginBottom: 30,
  },
  caption: {
    color: theme?.TEXT_DARK,
    fontSize: 24,
    marginLeft: 10,
    alignSelf: "center",
  },
  icon: {
    color: theme?.TEXT_DARK,
    fontSize: 24,
    marginLeft: 10,
    alignSelf: "center",
  },
  locationText: {
    fontSize: 16,
    color: theme?.TEXT_DARK,
    marginLeft: 10,
    alignSelf: "center",
    width: Dimensions.get("window").width / 1.8,
  },
  smBlockText: {
    fontSize: 16,
    color: theme?.TEXT_DARK,
    marginLeft: 10,
    alignSelf: "center",
  },
  copyRight: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: Dimensions.get("window").width / 1.6,
    alignSelf: "center",
  },
  appVer: {
    textAlign: "center",
    color: theme?.PRIMARY_COLOR,
  },
  copyText: {
    marginTop: 10,
    textAlign: "center",
    color: theme?.TEXT_DARK,
  },
});
