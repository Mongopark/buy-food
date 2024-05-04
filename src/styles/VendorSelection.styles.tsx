import { StyleSheet } from "react-native";
import { lightBackground, lightText } from "../constants/colors";

export const styles = StyleSheet.create({
	scroll: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	desc: {
		fontSize: 16,
		fontWeight: "400",
		fontFamily: "satoshi-regular",
	},
	vendorDetails: {
		paddingHorizontal: 16,
		position: "relative",
		marginTop: -40,
	},
	profileImageContainer: {
		borderColor: "black",
	},
	details: {
		marginVertical: 8,
	},
	info: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	backgroundImage: {
		resizeMode: "contain",
		height: 200,
		width: "100%",
		marginBottom: 10,
	},
	imageWrap: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginTop: 50,
		paddingHorizontal: 16,
	},
	flex: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
	},
	icon: {
		backgroundColor: "rgba(47, 47, 47, 0.4)",
		width: 34,
		height: 34,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "600",
		marginBottom: 5,
		fontFamily: "satoshi-bold",
	},
	imageIcon: {
		marginRight: 4,
	},
	infoWrapper: {
		flexDirection: "column",
		alignItems: "center",
		marginBottom: 4,
		width: "33%",
		paddingVertical: 10,
		gap: 5,
	},
	infoLabel: {
		fontWeight: "500",
		fontSize: 14,
		fontFamily: "satoshi-bold",
		color: "black",
	},
	dotContainer: {
		justifyContent: "flex-start",
		alignItems: "center",
		marginLeft: 2,
		height: 28,
	},
	dot: {
		fontSize: 16,
		fontWeight: "bold",
		color: lightText,
	},
	flexInfo: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	ratingContainer: {
		backgroundColor: lightBackground,
		borderRadius: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 6,
		paddingVertical: 3,
	},
	rating: {
		fontSize: 14,
		fontWeight: "500",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		height: 40,
		borderRadius: 8,
		borderWidth: 0,
		backgroundColor: lightBackground,
		marginHorizontal: 16,
	},
	input: {
		flex: 1,
		marginLeft: 8,
		marginRight: 8,
		fontSize: 16,
		color: "#000",
	},
	inputWrapper: {
		paddingHorizontal: 16,
	},
});
