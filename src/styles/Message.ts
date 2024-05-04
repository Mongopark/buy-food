import { StyleSheet } from "react-native";
import { backgroundColor } from "../constants/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: backgroundColor,
	},
	messageContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	btn: {
		position: "absolute",
		bottom: 30,
		width: "100%",
		marginLeft: 16,
	},
});
