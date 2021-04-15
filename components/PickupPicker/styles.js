import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: Dimensions.get("window").height / 1.4,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  materialIconTextbox: {
    marginTop: 10,
  },
  badge: {
    fontSize: 20,
    textTransform: "capitalize",
    alignSelf: "center",
    fontFamily: "Ubuntu-B",
    borderRadius: 10,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,

    paddingBottom: 3,
  },
  image1: {
    height: 120,
    alignSelf: "center",
    width: 120,
  },
  locateButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
  },
  slot: {
    borderColor: "#000000",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  locateButtonText: {
    color: theme.TEXT_DARK,
    alignSelf: "center",
  },
  slotText: {
    color: theme.TEXT_LIGHT,
    alignSelf: "center",
  },
  inputWrapper: {
    marginTop: 0,
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
    fontFamily: "Ubuntu-L",
    color: theme?.TEXT_LIGHT,
    marginTop: 20,
    alignSelf: "center",
  },
  inputStyle: {
    fontFamily: "Ubuntu-R",
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  slotsBlock: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
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
  hideButton: {
    marginTop: 30,
    alignSelf: "center",
    borderRadius: 100,
  },
  closeIcon: {
    color: theme.TEXT_LIGHT,
    textDecorationLine: "underline",
  },
  label: {
    fontFamily: "Ubuntu-R",
    flex: 1,
    flexWrap: "wrap",
  },
});
