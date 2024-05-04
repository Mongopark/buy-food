import { StyleSheet } from "react-native";
import { backgroundColor } from "../constants/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
		paddingHorizontal: 16,
		paddingTop: 70,
	},
	imageContainer: {
		alignItems: "center",
		marginBottom: 15,
	},
	halfColumnContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	halfColumn: {
		width: "48%",
	},
	logo: {
		height: 20,
	},
	txtContainer: {
		marginTop: 15,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		gap: 5,
	},
	txt: {
		textAlign: "center",
		fontSize: 12,
	},
	loginTxt: {
		fontWeight: "bold",
	},
	txtForgot: {
		textAlign: "right",
	},
	btn: {
		position: "absolute",
		bottom: 30,
		left: 14,
		marginHorizontal: "auto",
		width: "100%",
	},
});
