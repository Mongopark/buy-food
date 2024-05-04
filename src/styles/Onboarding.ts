import { StyleSheet } from "react-native";
import {
	backgroundColor,
	grey300,
	grey500,
	primaryColor,
} from "../constants/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
		paddingHorizontal: 20,
	},
	head: {
		fontFamily: "satoshi-bold",
		fontSize: 20,
		color: primaryColor,
	},
	main: {
		flex: 1,
		justifyContent: "center",
	},
	background: {
		height: 390.44,
		width: "100%",
		maxWidth: 350.04,
		marginLeft: "auto",
		marginRight: "auto",
		paddingTop: 73.31,
		resizeMode: "cover",
	},
	header: {
		fontWeight: "600",
		fontSize: 24,
		lineHeight: 26.4,
		textAlign: "center",
		color: grey500,
	},
	subheader: {
		fontSize: 14,
		fontWeight: "400",
		textAlign: "center",
		color: grey300,
		marginTop: 12,
		maxWidth: 311,
		marginLeft: "auto",
		marginRight: "auto",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFB80E",
		height: 58,
		borderRadius: 8,
		marginTop: 20,
	},
	buttonCTA: {
		color: grey500,
		fontWeight: "700",
		fontSize: 16,
		letterSpacing: 0.015,
	},
	terms: {
		color: grey300,
		fontSize: 12,
		fontWeight: "400",
		textAlign: "center",
		lineHeight: 16,
	},
	logIn: {
		color: grey300,
		fontSize: 12,
		fontWeight: "400",
		textAlign: "center",
		marginTop: 10,
	},
});
