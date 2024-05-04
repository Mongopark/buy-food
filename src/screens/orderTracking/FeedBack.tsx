import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenHeader from "../../components/header/ScreenHeader";
import {
	backgroundColor,
	primaryColor,
	secondaryColor,
} from "../../constants/colors";
import MainButton from "../../components/button/MainButton";

const FeedBack = () => {
	return (
		<View style={styles.container}>
			<ScreenHeader
				title="Thank you!"
				desc="Your feedback and rating is highly noted"
			/>

			<View style={styles.btn}>
				<MainButton
					title="Done"
					outline={false}
					onPress={() => {}}
					bG={secondaryColor}
					color={primaryColor}
				/>
			</View>
		</View>
	);
};

export default FeedBack;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: backgroundColor,
		position: "relative",
	},
	btn: {
		position: "absolute",
		bottom: 10,
		width: "100%",
		paddingHorizontal: 16,
	},
});
