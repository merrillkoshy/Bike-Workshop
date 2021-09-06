import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  container: {
    paddingVertical: 4,

    flex: 1,
  },
  contentContainer: {
    flexDirection: "column",
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  item: {
    flexDirection: "column",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  wrapper: {
    flexDirection: "row",
  },
  iconHolder: {
    width: "10%",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 7,
    paddingBottom: 5,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  imageHolder: {
    width: "75%",
    minHeight: 150,
    borderRadius: 10,
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  iconPlace: {
    width: 80,
    height: 50,
    alignSelf: "center",
  },
  cardItemImagePlace: {
    borderRadius: 10,
    flex: 1,
  },
  serviceCards: {
    flex: 1,
    borderColor: "#000000",
    borderWidth: 2,
    width: Dimensions.get("window").width,
    minHeight: 150,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    left: 0,
    right: 0,
  },
  bodyContent: {
    padding: 10,
    paddingTop: 12,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    justifyContent: "center",
    backgroundColor: "rgba(4,4,4,0.6)",
  },
  titleStyle: {
    marginTop: 10,
    fontFamily: "Ubuntu-R",
    textTransform: "capitalize",
    fontSize: 22,
    paddingLeft: 30,
    paddingBottom: 12,
    backgroundColor: theme.PRIMARY_COLOR,
    paddingVertical: 10,
    color: theme?.TEXT_DARK,
    borderTopRightRadius: 20,
    width: "35%",
  },
  subtitleStyle: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    lineHeight: 16,
    opacity: 0.5,
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
  },
  actionButton1: {
    padding: 8,
    height: 36,
  },
  actionText1: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    opacity: 0.9,
  },
  actionButton2: {
    padding: 8,
    height: 36,
  },
  actionText2: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    opacity: 0.9,
  },
  modalContent: {
    flex: 6,
    justifyContent: "center",
    alignSelf: "center",
  },
  history: {
    fontFamily: "Ubuntu-B",
    backgroundColor: theme?.TEXT_DARK,
    color: theme?.TEXT_LIGHT,
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 30,
  },
});
