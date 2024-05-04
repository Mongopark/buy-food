import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import { faqs } from "../../utils/Faq";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/ProfileNavigator";

interface FaqSingleScreenProps {
	navigation: StackNavigationProp<RootStackParamList, "AnswerScreen">;
	route: RouteProp<RootStackParamList, "AnswerScreen">;
}

const FaqSingleScreen = ({ route }: FaqSingleScreenProps) => {
	const { questionId } = route.params;
	console.log({ questionId });

	const faq = faqs.find((faq) => faq.id === questionId);

	return (
		<View style={styles.container}>
			<GoBackHeader title="FAQs" />
			<View style={styles.screenContainer}>
				<Text style={styles.questionTxt}>{faq?.question}</Text>
				<Text style={styles.answerTxt}>{faq?.answer}</Text>
			</View>
		</View>
	);
};

export default FaqSingleScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	screenContainer: {
		flex: 1,
		paddingHorizontal: 15,
	},
	questionTxt: {
		fontSize: 16,
		marginTop: 10,
		marginBottom: 20,
	},
	answerTxt: {
		lineHeight: 18.9,
		fontSize: 14,
	},
});
