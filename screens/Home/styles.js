import { StyleSheet } from "react-native";
import theme from "../../appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
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
    height: 527,
    marginLeft: 13,
    marginRight: 13,
  },
  scrollArea_contentContainerStyle: {
    height: 527,
    alignSelf: "stretch",
  },
  materialCardWithTextOverImage1: {
    height: 218,
    alignSelf: "stretch",
    borderRadius: 15,
    marginTop: 21,
  },
  history: {
    // fontFamily(.*)",
    color: theme?.TEXT_LIGHT,
    fontSize: 24,
    textDecorationLine: "underline",
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
