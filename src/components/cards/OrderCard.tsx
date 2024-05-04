import { Add, Minus } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import {
	Image,
	ImageSourcePropType,
	TouchableOpacity,
	View,
} from "react-native";
import Satoshi from "../fonts/satoshi";
import { StyleSheet } from "react-native";
import { grey300, grey500 } from "../../constants/colors";

import { ISelectedDish, useCustomerStore } from "../../store";
import { IFoodItem, IRestaurantItem } from "../../types/restaurant.interface";

type toggleType = 'add' | 'minus';

interface OrderCardPayload {
	image: ImageSourcePropType;
	name: string;
	initialPrice: number;
	currentPrice: number;
	description: string;
	quantity: number;
	dish: ISelectedDish;
	incQuantity: () => void;
	decQuantity: () => void;
}

const OrderCard = (props: OrderCardPayload) => {
	const quantity = props.quantity;
	const [foodItems, setFoodItems] = useState<string | null>(null);

	useEffect(() => {
		function getFoodItems() {
			if (props.dish.dishOptions.length > 0) {
				const items = props.dish.dishOptions.map(opt => {
					return opt.foodItems.map(item => item.name);
				});

				const display = items.join(', ')
				setFoodItems(display);
			}
		}

		getFoodItems();
	}, []);

	return (
		<View style={styles.conatiner}>
			<View style={styles.main}>
				<View style={styles.food}>
					<View style={styles.imageContainer}>
						<Image source={props.image} style={styles.image} />
					</View>
					<View>
						<Satoshi style={styles.name}>{props.name}</Satoshi>
						<>
							{foodItems !== null ? (
								<Satoshi style={styles.description}>{foodItems}</Satoshi>
							) : null }
						</>
						<>
							{props.dish.foodPack ? (
								<Satoshi style={styles.description}>
									{props.dish.foodPack.name}
								</Satoshi>) : null
							}
						</>
						{/* <Satoshi style={styles.description}>{}</Satoshi> */}
					</View>
				</View>
				<View style={styles.price}>
					<Satoshi style={styles.currentPrice}>
						₦{props.dish.totalDishPrice.toLocaleString()}
					</Satoshi>
					{ props.dish.oldPrice !== 0 ?
						<Satoshi style={styles.initialPrice}>
							₦{props.dish.oldPrice.toLocaleString()}
						</Satoshi> : null
					}
				</View>
			</View>
			<View style={styles.quantityContainer}>
				<View style={styles.reduce}>
					<Satoshi style={styles.quantity}>{quantity}x</Satoshi>
					<TouchableOpacity
						onPress={() => quantity > 0 && props.decQuantity()}
					>
						<Minus color={grey500} />
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => props.incQuantity()}>
					<Add color={grey500} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		paddingTop: 10,
	},
	main: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	food: {
		flexDirection: "row",
		gap: 10,
	},
	name: {
		fontSize: 16,
		lineHeight: 21.6,
		fontWeight: "700",
		fontFamily: "satoshi-medium",
		color: grey500,
		maxWidth: 175,
	},
	description: {
		fontSize: 14,
		lineHeight: 18.23,
		fontWeight: "400",
		color: grey300,
		maxWidth: 175,
		marginTop: 6,
	},
	currentPrice: {
		fontSize: 14,
		lineHeight: 18.23,
		color: grey500,
	},
	initialPrice: {
		fontSize: 12,
		lineHeight: 15.62,
		color: grey300,
		textDecorationLine: "line-through",
	},
	imageContainer: {
		width: 80,
		height: 80,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		borderRadius: 8,
	},
	price: {
		gap: 6,
	},
	quantityContainer: {
		marginTop: 4,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 3.5,
		paddingBottom: 3.5,
	},
	quantity: {
		fontWeight: "700",
		color: grey500,
		fontSize: 16,
		fontFamily: "satoshi-bold",
		lineHeight: 20.83,
	},
	reduce: {
		flexDirection: "row",
		gap: 16,
	},
});

export default OrderCard;
