import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },

  scrollArea: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,

    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    width: Dimensions.get("window").width / 1.5,
  },
  scrollArea_contentContainerStyle: {
    alignSelf: "center",
  },
  mrpStrikethrough: {
    marginLeft: 10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  infoCard: {
    marginTop: 10,
    alignSelf: "center",
    paddingLeft: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    // fontFamily(.*)",
    color: theme?.TEXT_LIGHT,
    fontSize: 22,
    alignSelf: "center",
    flexWrap: "wrap",
    width: Dimensions.get("window").width / 1.5,
    textAlign: "center",
  },
  loremIpsum: {
    top: 10,
    left: 85,
    position: "absolute",
    // fontFamily(.*)",
    color: theme?.TEXT_LIGHT,
  },
  textStack: {
    width: 86,
    height: 25,
    marginTop: -572,
    marginLeft: 25,
  },
  header: {
    height: 46,
    marginTop: -93,
  },
  image1: {
    width: 65,
    height: 65,
    marginTop: 0,
    marginLeft: 10,
  },
  cardItemImagePlace: {
    flex: 1,
    resizeMode: "contain",
    borderRadius: 15,
  },
  imageWrap: {
    height: Dimensions.get("window").height / 4,
  },
  contentContainer: {
    flexDirection: "column",
    flex: 1,
  },
  priceListing: {
    marginLeft: 10,
    fontFamily: "Ubuntu-L",
  },
  descriptionPara: {
    flexWrap: "wrap",
    marginLeft: 10,
    fontStyle: "italic",
  },
  matButton: {
    color: "#FFFFFF",
    height: 40,
    width: 120,
    marginTop: 30,
    alignSelf: "center",
  },
  pricingSection: {
    flexDirection: "row",
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
  inputBlock: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontFamily: "Ubuntu-R",
    fontWeight: "600",

    fontSize: 20,
    textDecorationLine: "underline",
  },
  includedServicesTitle: {
    fontFamily: "Ubuntu-B",
    fontSize: 16,
  },
  priceListingTitle: {
    fontFamily: "Ubuntu-B",
    fontSize: 16,
  },
  includedServices: {
    fontFamily: "Ubuntu-L",
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
