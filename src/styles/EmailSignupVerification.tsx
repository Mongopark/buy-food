import { StyleSheet } from "react-native";
import { backgroundColor, grey600, secondaryColor } from "../constants/colors";

export const otpStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
	},
	otpContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 30,
	},
	otpInput: {
		width: 56,
		height: 56,
		backgroundColor: grey600,
		borderRadius: 10,
		marginHorizontal: 5,
		fontSize: 24,
		textAlign: "center",
	},
	message: {
		textAlign: "center",
		fontSize: 14,
	},
	resendTxt: {
		fontWeight: "bold",
		fontSize: 14,
		fontFamily: "satoshi-regular",
		color: secondaryColor,
	},
	resendContainer: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 3,
	},
});
