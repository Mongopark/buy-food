import { StyleSheet } from "react-native";
import { lightText, primaryColor, gray50, grey600 } from "../constants/colors";

export const styles = StyleSheet.create({
	nameField: {
		gap: 5,
		marginBottom: 20,
	},
	label: {
		fontSize: 14,
		color: primaryColor,
		fontWeight: "400",
		fontFamily: "satoshi-regular",
	},
	textInput: { color: primaryColor },
	input: {
		paddingHorizontal: 16,
		paddingVertical: 16,
		backgroundColor: grey600,
		borderRadius: 8,
		fontSize: 14,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		color: primaryColor,
	},
	error: {
		fontSize: 12,
		color: "red",
	},
});
