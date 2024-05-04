import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TextAloneHeader from "../../components/header/TextAloneHeader";
import OrderSingleHistory from "../../components/cards/OrderSingleHistory";
import { styles } from "../../styles/Reorder";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import ModalView from "../../components/modal/Modal";
import { primaryColor } from "../../constants/colors";
import { CloseCircle } from "iconsax-react-native";
import { TabParamList } from "../../navigation/BottomTabNavigator";

const orders = [
	{
		title: "Food name: Lorem ipsum & seit dolors",
		price: "₦1,500.00",
		date: "29 May, 2023 18:30",
		status: "Pending",
	},
	{
		title: "Food name: Lorem ipsum & seit dolors",
		price: "₦1,500.00",
		date: "29 May, 2023 18:30",
		status: "Delivered",
	},
	{
		title: "Food name: Lorem ipsum & seit dolors",
		price: "₦1,500.00",
		date: "29 May, 2023 18:30",
		status: "Delivered",
	},
	{
		title: "Food name: Lorem ipsum & seit dolors",
		price: "₦1,500.00",
		date: "29 May, 2023 18:30",
		status: "Delivered",
	},
];

const MyOrders = () => {
	const { navigate } = useNavigation<NavigationProp<TabParamList>>();

	const handleReorder = () => {
		navigate("ReOrder");
	};
	return (
		<ScrollView style={styles.container}>
			<TextAloneHeader title="My orders" />

			{orders.map((order, index) => (
				<View key={index}>
					<OrderSingleHistory
						title={order.title}
						price={order.price}
						date={order.date}
						status={order.status}
						onPress={handleReorder}
					/>
					<View style={styles.line} />
				</View>
			))}
		</ScrollView>
	);
};

export default MyOrders;
