import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import { backgroundColor } from "../../constants/colors";
import SearchInput from "../../components/inputs/SearchInput";

const AddNewAddress = () => {
	return (
		<View style={styles.container}>
			<GoBackHeader title="Add new address" />
			<View style={styles.screenContainer}>
				<SearchInput />
			</View>
		</View>
	);
};

export default AddNewAddress;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
	},
	screenContainer: {
		paddingHorizontal: 16,
	},
});
