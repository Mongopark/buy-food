import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import Dropdown from "../../components/dropdown/Dropdown";
import { backgroundColor } from "../../constants/colors";
import { faqs } from "../../utils/Faq";
import {
	NavigationProp,
	ParamListBase,
	useNavigation,
} from "@react-navigation/native";

interface FAQScreenProps {
	navigation: NavigationProp<ParamListBase>; // Define the navigation prop type
}
const FaqScreen = ({ navigation }: FAQScreenProps) => {
	const navigateToAnswer = (questionId: number) => {
		console.log({ questionId });

		navigation.navigate("AnswerScreen");
	};

	return (
		<View style={styles.container}>
			<GoBackHeader title="FAQs" />
			<View style={styles.screenContainer}>
				{faqs.map((faq) => (
					<TouchableOpacity
						key={faq.id}
						onPress={() => navigation.navigate("PersonalDetails")}
					>
						<Dropdown
							title={faq.question}
							element={() => {}}
							onPress={() => {}}
						/>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default FaqScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
	},
	screenContainer: {
		flex: 1,
		paddingHorizontal: 16,
	},
});
