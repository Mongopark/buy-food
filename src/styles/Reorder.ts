import { StyleSheet } from "react-native";
import { backgroundColor, gray100, secondaryColor } from "../constants/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
		paddingHorizontal: 16,
		paddingTop: 60,
	},
	line: {
		width: "100%",
		backgroundColor: gray100,
		height: 1,
	},

	modalContainer: {
		backgroundColor: backgroundColor,
		height: "93%",
		width: "100%",
		paddingHorizontal: 16,
		paddingVertical: 20,
		borderRadius: 10,
	},
	screenTxt: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	desc: {
		fontSize: 14,
		textAlign: "center",
		marginTop: 5,
	},
	headerContainer: {
		marginHorizontal: 30,
		marginVertical: 15,
	},
	scrollDetails: {
		flex: 1,
		width: "100%",
	},
	contentContainer: {
		flexGrow: 1,
	},
	mealImageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 50,
	},
	orderContainer: {
		marginTop: 15,
	},
});
