import { Dimensions, StyleSheet } from "react-native";
import theme from "../../appStyles";
export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.HASNAIN_GREY,
	},
	modalContainer: {
		borderRadius: 20,
		justifyContent: "center",
		alignSelf: "center",
		flexDirection: "column",
		flex: 1,
	},
	animatableCard: {
		flex: 1,
	},
	carding: {
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		// backgroundColor: theme.THEME_LIGHT,
		height: Dimensions.get("screen").height,
	},
	footer: {
		width: 375,
		height: 56,
		marginTop: 684,
	},
	scrollArea: {
		alignSelf: "stretch",
		height: Dimensions.get("window").height / 1.3,
		marginTop: 22,
		marginLeft: 22,
		marginRight: 22,
	},
	scrollArea_contentContainerStyle: {
		alignSelf: "center",
	},
	infoCard: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 30,
		// width: Dimensions.get("window").width / 1.5,
		alignSelf: "center",
		// paddingLeft: 30,
		marginBottom: 100,
	},
	text: {
		top: 0,
		left: 0,
		position: "absolute",
		// fontFamily(.*)",
		color: theme?.TEXT_LIGHT,
		fontSize: 22,
		width: 86,
		height: 25,
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
	modalContent: {
		flex: 6,
		justifyContent: "center",
		alignSelf: "center",
	},
});
