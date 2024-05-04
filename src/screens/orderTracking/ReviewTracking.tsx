import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CloseHeader from "../../components/header/CloseHeader";
import ScreenHeader from "../../components/header/ScreenHeader";

import { Rating } from "react-native-ratings";
import {
	backgroundColor,
	primaryColor,
	secondaryColor,
} from "../../constants/colors";
import MainButton from "../../components/button/MainButton";

const ReviewTracking = () => {
	return (
		<View style={styles.container}>
			<CloseHeader isBtn={false} />
			<View>
				<ScreenHeader
					title="How was your experience with the rider"
					desc="Please rate your experience with Harry Johnson"
				/>
				<View style={styles.ratingContainer}>
					<Rating imageSize={40} ratingCount={5} ratingBackgroundColor="#fff" />
				</View>
			</View>
			<View style={styles.restuarant}>
				<ScreenHeader
					title="How was your experience with the restuarant"
					desc="Please rate your experience with Vendor’s name"
				/>
				<Rating imageSize={40} ratingCount={5} ratingBackgroundColor="#fff" />
			</View>

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

export default ReviewTracking;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 50,
		backgroundColor: backgroundColor,
		position: "relative",
	},
	txt: {
		fontSize: 24,
	},
	ratingContainer: {},
	restuarant: {
		marginTop: 50,
	},

	btn: {
		position: "absolute",
		bottom: 10,
		width: "100%",
		left: 16,
	},
});
