import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { primaryColor, secondaryColor } from "../../constants/colors";
import { CloseCircle } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

type CloseHeaderProps = {
	isBtn?: boolean;
};

const CloseHeader = ({ isBtn }: CloseHeaderProps) => {
	const { navigate, goBack } = useNavigation<any>();
	return (
		<View style={styles.cancelContainer}>
			<CloseCircle size="24" color={primaryColor} onPress={() => goBack()} />
			{isBtn ? (
				<TouchableOpacity>
					<Text style={styles.helpBtn}>Help</Text>
				</TouchableOpacity>
			) : null}
		</View>
	);
};

export default CloseHeader;

const styles = StyleSheet.create({
	cancelContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	helpBtn: {
		backgroundColor: secondaryColor,
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderWidth: 1,
		borderColor: secondaryColor,
		borderRadius: 15,
		overflow: "hidden",
	},
});
