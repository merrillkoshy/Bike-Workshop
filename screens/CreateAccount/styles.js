import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  materialIconTextbox: {
    height: 42,
    width: 307,
    marginTop: 10,
    marginLeft: 37,
  },
  image1: {
    width: 240,
    height: 150,
    alignSelf: "center",
  },
  matButton: {
    color: "#FFFFFF",
    height: 40,
    width: 120,
    marginTop: 30,
    alignSelf: "center",
  },
  termsConditions: {
    // fontFamily(.*)",
    color: theme?.PRIMARY_COLOR,
    marginTop: 54,
    alignSelf: "center",
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
  verificationButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 5,
    padding: 5,

    paddingLeft: 10,
    paddingRight: 10,
  },
  verificationButtonDisabled: {
    backgroundColor: theme.INACTIVE,
    borderRadius: 5,
    padding: 5,

    paddingLeft: 10,
    paddingRight: 10,
  },
  verificationCode: {
    color: theme?.TEXT_INPUT,
    marginLeft: 30,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
  },
  googleVerificationMessage: {
    marginTop: 30,
    alignItems: "flex-end",
  },
  iconStyle: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 24,
    paddingLeft: 8,
  },
  inputBlock: {
    height: 42,
    width: 307,
    marginTop: 10,
    marginLeft: 37,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
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
  // Modal
  centeredView: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    marginTop: Dimensions.get("window").height / 3,

    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBlock: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
});
