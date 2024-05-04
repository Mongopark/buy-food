import { StyleSheet } from "react-native";
import {
	lightBackground,
	lightText,
	primaryColor,
	textColor,
} from "../constants/colors";

export const styles = StyleSheet.create({
	container: {},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		height: 40,
		borderRadius: 8,
		borderWidth: 0,
		backgroundColor: lightBackground,
	},
	searchContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		marginHorizontal: 16,
		height: 40,
		borderRadius: 8,
		borderWidth: 0,
		backgroundColor: lightBackground,
		marginTop: 9,
	},
	inputContainer2: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		height: 40,
		borderRadius: 8,
		borderWidth: 0,
		backgroundColor: lightBackground,
		marginTop: 9,
		marginHorizontal: 16,
	},
	input: {
		flex: 1,
		marginLeft: 8,
		marginRight: 8,
		fontSize: 16,
		color: "#000",
	},
	closeContainer: {
		justifyContent: "flex-end",
		alignItems: "flex-end",
		paddingRight: 16,
		paddingBottom: 16,
	},
	search: {
		alignItems: "center",
		paddingRight: 20,
		paddingVertical: 8,
		flexDirection: "row",
		gap: 10,
	},
	dropdownContainer: {
		position: "absolute",
		top: 60,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: "#fff",
		zIndex: 1,
	},
	dropdownContent: {
		flex: 1,
	},
	divider: {
		height: 0.5,
		backgroundColor: lightText,
		marginVertical: 15,
	},
	flex: {
		paddingHorizontal: 16,
	},
	recent: {
		color: "#747474",
		marginBottom: 5,
	},
	dropdownSection: {
		paddingBottom: 30,
		flex: 1,
		marginLeft: 16,
	},
	dropdownSectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 10,
		marginTop: 5,
		color: primaryColor,
	},
	dropdownItem: {
		fontSize: 13,
		paddingVertical: 4,
		color: textColor,
	},
	cancelButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "blue",
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		backgroundColor: "white",
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 10,
		flex: 1,
	},
	categoriesContainer: {
		alignItems: "center",
		paddingRight: 20,
		paddingVertical: 15,
		flexDirection: "row",
		gap: 10,
	},
});