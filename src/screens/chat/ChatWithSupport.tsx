import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import {
	gray100,
	lightText,
	primaryColor,
	secondaryColor,
} from "../../constants/colors";
import { Send } from "iconsax-react-native";
import MainTextInput from "../../components/inputs/MainTextInput";
import { backgroundColor } from "../../constants/colors";
import { gray50 } from "../../constants/colors";

const ChatWithSupport = () => {
	const chatAvaiable = false;
	const chatMessage = [
		{
			person: "user1",
			msg: "Hello, how are you?",
			time: "23:43pm",
		},
		{
			person: "user2",
			msg: "Fine, but let this app breathe",
			time: "23:44pm",
		},
		{
			person: "user1",
			msg: "How was the exam?",
			time: "23:45pm",
		},
	];
	return (
		<View style={styles.container}>
			<GoBackHeader title="Ella from Ndia" />
			{chatAvaiable ? (
				<ScrollView style={styles.msgContainer}>
					{chatMessage.map((item, index) => (
						<View
							key={index}
							style={
								item.person === "user1"
									? styles.senderMessage
									: styles.receiverMessage
							}
						>
							<Text
								style={
									item.person === "user1"
										? styles.senderTxt
										: styles.receiverTxt
								}
							>
								{item.msg}
							</Text>

							<Text style={styles.time}>{item.time}</Text>
						</View>
					))}
				</ScrollView>
			) : (
				<View style={styles.screenContainer}>
					<Text style={styles.msg}>
						Need to get in touch with your rider? Send them a message here.
					</Text>
				</View>
			)}

			<View style={styles.messageForm}>
				<View style={styles.msgInput}>
					<MainTextInput placeholder="Type a message..." />
				</View>
				<View style={styles.sendBtn}>
					<Send size="24" color={primaryColor} variant="Bold" />
				</View>
			</View>
		</View>
	);
};

export default ChatWithSupport;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColor,
	},
	screenContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 16,
	},
	msgContainer: {
		display: "flex",
		gap: 20,
		paddingHorizontal: 15,
		flex: 1,
		marginTop: 15,
	},
	senderMessage: {
		alignSelf: "flex-end",
		alignItems: "flex-end",
	},
	receiverMessage: {
		alignSelf: "flex-start",
	},
	senderTxt: {
		backgroundColor: secondaryColor,
		fontSize: 14,
		padding: 20,
		marginBottom: 10,
		borderRadius: 10,
		overflow: "hidden",
		borderColor: "#000",
		borderTopRightRadius: 50,
	},
	receiverTxt: {
		backgroundColor: gray50,
		fontSize: 14,
		padding: 20,
		marginBottom: 10,
		borderRadius: 10,
		overflow: "hidden",
	},
	time: {
		fontSize: 12,
		color: lightText,
	},
	msg: {
		fontSize: 14,
		color: lightText,
		fontWeight: "400",
		textAlign: "center",
	},
	messageForm: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		backgroundColor: backgroundColor,
		borderTopColor: gray50,
		borderTopWidth: 1,
		paddingHorizontal: 10,
		alignItems: "center",
		paddingVertical: 15,
	},
	msgInput: {
		width: "83%",
	},
	sendBtn: {
		backgroundColor: gray100,
		justifyContent: "center",
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderRadius: 30,
	},
});
