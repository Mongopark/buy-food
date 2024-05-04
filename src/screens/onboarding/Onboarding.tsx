import React from "react";
import {
	StatusBar,
	View,
	TouchableOpacity,
	ImageBackground,
	StyleSheet,
	Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../navigation/AuthNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
// import { useAppDispatch } from "../redux/store";
// import { onBoard } from "../redux/actions/authAction";
import {
	backgroundColor,
	grey300,
	grey500,
	primaryColor,
	secondaryColor,
} from "../../constants/colors";
import Satoshi from "../../components/fonts/satoshi";
import * as Location from "expo-location";

export const Onboarding = () => {
	const { navigate } = useNavigation<StackNavigationProp<AuthStackParamList>>();
	// const dispatch = useAppDispatch();

	const handleSkip = () => {
		// dispatch(onBoard());
		navigate("Signup");
	};

	return (
		<View style={styles.container}>
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor="rgba(0,0,0,0)"
				translucent={true}
			/>
			<View style={styles.main}>
				<ImageBackground
					source={require("../../assets/onboarding-bg.png")}
					style={styles.background}
				>
					<View>
						<Text style={styles.header}>
							Welcome to <Text style={styles.logo}>Ndia’</Text>
						</Text>
					</View>
					<View>
						<Satoshi style={styles.subheader}>
							Order food from local vendors around you, we’ve got you covered.
						</Satoshi>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.info}>
				<View>
					<Satoshi style={styles.terms}>
						By registering, you accept our{" "}
						<Satoshi
							style={{ textDecorationLine: "underline" }}
							onPress={() => navigate("Terms")}
						>
							Terms & Conditions
						</Satoshi>
					</Satoshi>
				</View>
				<TouchableOpacity onPress={handleSkip} style={styles.button}>
					<Satoshi style={styles.buttonCTA}>Get Started</Satoshi>
				</TouchableOpacity>
				<View>
					<Satoshi style={styles.logIn}>
						Have an account already?
						<Satoshi
							style={{
								color: grey500,
								fontWeight: "700",
								fontFamily: "satoshi-bold",
							}}
							onPress={() => navigate("Login")}
						>
							Log in
						</Satoshi>
					</Satoshi>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
		paddingHorizontal: 16,
	},
	logo: { color: secondaryColor },
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
	info: {
		position: "absolute",
		width: "100%",
		left: 16,
		bottom: 40,
	},
	header: {
		fontWeight: "600",
		fontSize: 24,
		lineHeight: 26.4,
		textAlign: "center",
		fontFamily: "satoshi-bold",
		color: grey500,
	},
	subheader: {
		fontSize: 14,
		fontWeight: "400",
		textAlign: "center",
		color: primaryColor,
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
		fontFamily: "satoshi-bold",
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
