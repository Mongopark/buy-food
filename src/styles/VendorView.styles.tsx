import { Dimensions, StyleSheet } from "react-native";
import { lightText } from "../constants/colors";

const WIDTH = Dimensions.get("window").width - 120;

export const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
	itemContainer: {
		marginRight: 16,
		width: WIDTH,
		paddingVertical: 6,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 14,
		marginTop: 10,
		paddingHorizontal: 20,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
	},
	padding: {
		paddingHorizontal: 20,
	},
	paddingLeft: {
		paddingLeft: 20,
	},
	seeAllButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	seeAllText: {
		marginRight: 2,
		fontSize: 12,
		fontWeight: "400",
		color: lightText,
	},
	divider: {
		height: 0.5,
		backgroundColor: lightText,
		marginVertical: 20,
	},
});
