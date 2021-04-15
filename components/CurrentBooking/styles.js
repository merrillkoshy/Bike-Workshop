import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,

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
  cardItemImagePlace: {
    borderRadius: 20,

    flex: 1,
    height: 300,
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    right: 0,
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    paddingLeft: 30,
    justifyContent: "center",
    backgroundColor: "rgba(4,4,4,0.6)",
  },
  titleStyle: {
    fontFamily: "Ubuntu-B",
    fontSize: 22,
    color: theme?.TEXT_DARK,
    paddingBottom: 12,
    textTransform: "capitalize",
  },
  subtitleStyle: {
    fontFamily: "Ubuntu-R",
    fontSize: 14,
    color: theme?.TEXT_DARK,
    lineHeight: 16,
    opacity: 0.5,
  },
  pickAndDrop: {
    marginTop: 5,
    fontFamily: "Ubuntu-R",
    fontSize: 16,
    color: theme?.TEXT_DARK,
    lineHeight: 16,
    opacity: 1,
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
  },
  actionButton1: {
    backgroundColor: theme.PRIMARY_COLOR,

    height: 36,
    borderRadius: 10,
    marginLeft: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  actionText1: {
    fontFamily: "Ubuntu-R",
    fontSize: 14,
    color: theme?.TEXT_DARK,
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
  modalContainer: {
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column",
    flex: 1,
  },
  modalContent: {
    flex: 6,
    justifyContent: "center",
    alignSelf: "center",
  },
});
