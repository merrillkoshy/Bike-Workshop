import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    borderColor: "#000000",
    borderWidth: 2,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
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

  helpText: {
    color: theme?.TEXT_LIGHT,
    marginTop: 20,
    alignSelf: "center",
  },
  inputStyle: {
    color: theme.TEXT_LIGHT,
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
    marginLeft: "2%",
    marginTop: "-1%",
    alignSelf: "center",
    backgroundColor: theme?.THEME_LIGHT,
    borderColor: theme?.PRIMARY_COLOR,
    borderWidth: 2,
    borderRadius: 50,
  },
  hideButton: {
    marginTop: 30,
    alignSelf: "center",
    borderRadius: 100,
  },
  closeIcon: {
    color: theme.TEXT_LIGHT,
    textDecorationLine: "underline",
  },
});
