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
  yusufsDashboard: {
    // fontFamily(.*)",
    color: theme?.TEXT_LIGHT,
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
    alignSelf: "stretch",
    height: Dimensions.get("screen").height / 1.3,
    marginLeft: 13,
    marginRight: 13,
  },
  scrollArea_contentContainerStyle: {
    alignSelf: "stretch",
  },
  materialCardWithTextOverImage1: {
    height: 218,
    alignSelf: "stretch",
    borderRadius: 15,
    marginTop: 21,
  },
  servicesListing: {
    height: 550,
    alignSelf: "center",
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 15,
    marginTop: 21,
    marginBottom: 40,
  },
  history: {
    // fontFamily(.*)",
    color: theme?.TEXT_LIGHT,
    fontSize: 24,

    marginTop: 27,
    marginLeft: 16,
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
