import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import OrderCard from "../cards/OrderCard";
import { FOOD_1 } from "../../assets";
import ProgressBar from "../progressbar/ProgressBar";
import { styles } from "../../styles/Reorder";
import TextAloneHeader from "../header/TextAloneHeader";
import RiderCallCard from "../cards/RiderCallCard";

const FourthModalTracking = () => {
	return (
		<View style={styles.scrollDetails}>
			<View style={styles.headerContainer}>
				<Text style={styles.screenTxt}>Picking up your order</Text>
				<Text style={styles.desc}>Estimated delivery time: 11:40 AM</Text>
			</View>
			<ProgressBar steps={5} currentStep={3} />

			{/* MAP */}
			<TextAloneHeader title="Rider’s details" />
			<RiderCallCard />
		</View>
	);
};

export default FourthModalTracking;
