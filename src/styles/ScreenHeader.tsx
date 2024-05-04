import { StyleSheet } from "react-native";
import { primaryColor, lightText, grey200 } from "../constants/colors";

export const styles = StyleSheet.create({
	screenHeader: {
		paddingHorizontal: 10,
		marginTop: 20,
		marginBottom: 15,
	},
	title: {
		fontSize: 24,
		fontWeight: "700",
		color: primaryColor,
		textAlign: "center",
		marginBottom: 5,
	},
	desc: {
		fontSize: 14,
		textAlign: "center",
		marginTop: 10,
		color: grey200,
		marginVertical: 10,
		fontFamily: "satoshi-regular",
	},
});
