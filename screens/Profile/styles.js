import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.HASNAIN_GREY,
  },
  carding: {
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: theme.THEME_LIGHT,
    height: Dimensions.get("screen").height,
  },
  icon: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 126,
    marginTop: "10%",
    alignSelf: "center",
  },
  photo: {
    marginTop: "10%",
    marginBottom: "7%",
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  profileName: {
    // fontFamily(.*)",
    color: theme?.TEXT_LIGHT,
    fontSize: 28,
    marginTop: 7,
    alignSelf: "center",
  },

  scrollArea: {
    height: Dimensions.get("window").height,
    marginTop: 0,
    alignSelf: "center",
  },
  scrollArea_contentContainerStyle: {
    marginTop: 30,
    width: Dimensions.get("window").width / 1.1,
  },
  infoCard: {
    height: 60,
    width: Dimensions.get("window").width / 1.5,
    alignSelf: "center",
    paddingLeft: 30,
    marginBottom: 10,
  },
  infoCard1: {
    height: 65,
    width: 342,
  },
  backIcon: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 40,
    marginLeft: 10,
  },
  logout: {
    height: 45,
    width: 90,

    marginTop: 50,
    alignSelf: "center",
  },
});
