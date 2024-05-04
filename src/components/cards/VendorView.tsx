import { ArrowRight2 } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { lightText } from "../../constants/colors";
import VendorCard from "./VendorCard";
import { styles } from "../../styles/VendorView.styles";
import api, { AxiosError } from "../../api";
import { useCustomerStore } from "../../store";
import { IRestaurantItem } from "../../types/restaurant.interface";

// const foodData = [
//   {
//     id: "1",
//     name: "Vendor’s name",
//     rating: 4.5,
//     image: "../../assets/food1.png",
//     price: "₦500",
//     eta: "10 - 20 mins",
//   },
//   {
//     id: "2",
//     name: "Vendor’s name",
//     rating: 4.2,
//     image: "http://localhost:8081/src/assets/food1.png",
//     price: "₦500",
//     eta: "10 - 20 mins",
//   },
//   {
//     id: "3",
//     name: "Vendor’s name",
//     rating: 3,
//     image: "http://localhost:8081/src/assets/food2.png",
//     price: "₦500",
//     eta: "10 - 20 mins",
//   },
//   {
//     id: "4",
//     name: "Vendor’s name",
//     rating: 3.5,
//     image: "http://localhost:8081/src/assets/food3.png",
//     price: "₦500",
//     eta: "10 - 20 mins",
//   },
//   // Add more food items as needed
// ];

const VendorView = () => {
	const [restaurants, setRestaurants] = useState<IRestaurantItem[]>([]);
	const { accessToken, refreshToken } = useCustomerStore((state) => ({
		accessToken: state.accessToken,
		refreshToken: state.refreshToken,
	}));

	useEffect(() => {
		async function fetchRestaurantsNearBy() {
			try {
				const res = await api.get('/customers/restaurants/location', {
					headers: {
						"Authorization": "Bearer " + accessToken
					}
				});

				console.log("nearby restaurants!")
				console.log(res.data);
			} catch (e) {
				if (e instanceof AxiosError) {
					console.log("nearby restaurants!")
					console.log(e.response?.data)
					// console.log("refresh: ", refreshToken);
				}

				console.log(e);
			}
		}

		async function fetchRestaurantsByRatings() {
			try {
				const res = await api.get('/customers/restaurants/rating', {
					headers: {
						"Authorization": "Bearer " + accessToken
					}
				});

				console.log("rating!")
				console.log(res.data);
			} catch (e) {
				if (e instanceof AxiosError) {
					console.log("rating!")
					console.log(e.response?.data)
					// console.log("refresh: ", refreshToken);
				}

				console.log(e);
			}
		}

		async function fetchAllRestaurants() {
			console.log("I got here....");
			try {
				const res = await api.get('/customers/restaurants/all', {
					headers: {
						"Authorization": "Bearer " + accessToken
					}
				});

				// console.log("all!")
				// console.log(res.data.data);
				
				const restaurantItems: IRestaurantItem[] = res.data.data.map((item: IRestaurantItem) => ({
					id: item.id,
					name: item.name,
					rating: +item.rating,
					logoUrl: item.logoUrl,
					eta: item.avgPreparationTime,
					minimumDeliveryFee: item.minimumDeliveryFee,
					address: item.address,
				}));

				setRestaurants([...restaurantItems]);
			} catch (e) {
				if (e instanceof AxiosError) {
					console.log("all!")
					console.log(e.response?.data)
					// console.log("refresh: ", refreshToken);
				}

				console.log(e);
			}
		}

		fetchAllRestaurants();
	}, []);

	const renderItem = ({ item }: {item: IRestaurantItem}) => {
		// console.log("I ran.....");
		// console.log("typeof", typeof item);
		if (item === undefined) return null;

		return (
			<View style={styles.itemContainer}>
				<VendorCard item={item} />
			</View>
		)
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.label}>Best near you</Text>
			</View>
			<View style={styles.paddingLeft}>
				<FlatList
					data={restaurants}
					renderItem={renderItem}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id}
				/>
			</View>
			<View style={styles.header}>
				<Text style={styles.label}>Top picks</Text>
				<TouchableOpacity style={styles.seeAllButton}>
					<Text style={styles.seeAllText}>See All</Text>
					<ArrowRight2 size="16" color={lightText} variant="Outline" />
				</TouchableOpacity>
			</View>
			<View style={styles.paddingLeft}>
				{
					restaurants.length > 0 ?
					<FlatList
						data={[...restaurants].reverse()}
						renderItem={renderItem}
						horizontal
						showsHorizontalScrollIndicator={false}
						keyExtractor={(item) => item.id}
					/> : null
				}
			</View>
			<View style={styles.padding}>
				<View style={styles.divider} />
			</View>
			{
				restaurants.length > 0 ?
				<View style={styles.padding}>
					{restaurants.map(restaurant => (
						<VendorCard key={restaurant.id} item={restaurant} />
					)) }
				</View>
					: null
			}
		</View>
	);
};

export default VendorView;
