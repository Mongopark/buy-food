import { StyleSheet, View } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import Dropdown from "../../components/dropdown/Dropdown";
import { Card } from "iconsax-react-native";
import { backgroundColor, primaryColor } from "../../constants/colors";

const AddNewCardScreen = () => {
	return (
		<View style={styles.container}>
			<GoBackHeader title="Payment methods" />
			<View style={styles.screenContainer}>
				<Dropdown
					title="Add new card"
					element={<Card size="24" color={primaryColor} />}
					onPress={() => {}}
				/>
			</View>
		</View>
	);
};

export default AddNewCardScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
	},
	screenContainer: {
		flex: 1,
		paddingHorizontal: 15,
	},
});
