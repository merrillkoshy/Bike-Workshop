import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contentContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    // alignSelf: "center",
    borderRadius: 20,
    padding: 20,
  },
  materialIconTextbox: {
    marginTop: 10,
  },
  image1: {
    height: 120,
    alignSelf: "center",
  },
  inputWrapper: {
    marginTop: 30,
    alignSelf: "center",
    justifyContent: "center",
  },
  matButton: {
    color: "#FFFFFF",
    padding: 10,
    marginTop: 30,
    alignSelf: "center",
  },
  termsConditions: {
    // fontFamily(.*)",
    color: theme?.PRIMARY_COLOR,
    marginTop: 54,
    alignSelf: "center",
  },
  helpText: {
    color: theme?.TEXT_DARK,
    marginTop: 20,
    alignSelf: "center",
  },
  inputStyle: {
    fontFamily: "Ubuntu-R",
    color: theme.TEXT_DARK,
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
    backgroundColor: "rgba(255,255,255,0.6)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  icon: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 126,
    alignSelf: "center",
  },
  pencilIcon: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 30,
    marginLeft: "20%",
    marginTop: "-10%",
    alignSelf: "center",
    backgroundColor: theme?.THEME_LIGHT,
    borderColor: theme?.PRIMARY_COLOR,
    borderWidth: 2,
    borderRadius: 50,
  },
});
