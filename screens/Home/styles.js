import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  captureContainer: {
    marginTop: 30,
    flex: 1,
  },
  welcome: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: theme.HASNAIN_GREY,
    paddingBottom: 30,
    shadowColor: theme?.TEXT_INPUT,
    shadowRadius: 1.5,
  },
  carding: {
    backgroundColor: theme.THEME_LIGHT,
    height: Dimensions.get("screen").height / 1.4,
  },
  yusufsDashboard: {
    fontFamily: "Ubuntu-B",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    color: theme?.TEXT_DARK,
    fontSize: 22,
    marginTop: 5,
  },
  yusufsDashboardRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  scrollArea: {
    flex: 1,
    alignSelf: "stretch",
  },
  scrollArea_contentContainerStyle: {
    alignSelf: "stretch",
  },
  bookingHeroPanel: {
    alignSelf: "center",
    height: 100,
    borderRadius: 15,
    marginTop: 21,
    width: Dimensions.get("window").width / 1.1,

    borderColor: "#CCC",
    flexWrap: "nowrap",

    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },
  servicesListing: {
    alignSelf: "center",
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 15,

    marginBottom: 40,
  },
  history: {
    fontFamily: "Ubuntu-B",
    color: theme?.TEXT_LIGHT,
    fontSize: 24,
    marginBottom: 30,
    marginLeft: 30,
  },
  infoCard: {
    height: 97,
    alignSelf: "stretch",
    marginTop: 25,
    marginLeft: 9,
    marginRight: 9,
  },
  homeFooter: {
    height: 56,
  },
});
