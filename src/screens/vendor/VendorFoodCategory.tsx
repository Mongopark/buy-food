import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextAloneHeader from "../../components/header/TextAloneHeader";
import GoBackHeader from "../../components/header/GoBackHeader";
import SearchInput from "../../components/inputs/SearchInput";
import {
  backgroundColor,
  gray100,
  primaryColor,
  secondaryColor,
} from "../../constants/colors";
import { items } from "../../utils/FoodCategory";
import OrderCard from "../../components/cards/OrderCard";
import { FOOD_1 } from "../../assets";
import { orders } from "../../utils/orderCard";
import MainButton from "../../components/button/MainButton";
import { useNavigation } from "@react-navigation/native";

const VendorFoodCategory = () => {
  const { navigate } = useNavigation<any>();
  const handleGoToCart = () => navigate("VendorMenu");
  return (
    <View style={styles.container}>
      <GoBackHeader title="Ndia’s Cuisine" />
      <View style={styles.filter}>
        <SearchInput />
        <ScrollView
          horizontal
          style={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
        >
          {items.map(({ name, id }) => (
            <View style={styles.foodScroll} key={id}>
              <Text>{name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.screenContainer}>
        <TextAloneHeader title="Rice" />

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {orders.map((order, index) => (
            <View key={index}>
              <OrderCard
                currentPrice={order.currentPrice}
                initialPrice={order.initialPrice}
                description={order.desc}
                quantity={order.quantity}
                image={FOOD_1}
                name={order.name}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.btn}>
          <View style={styles.btnContainer}>
            <MainButton
              title="Go to cart • ₦1,500"
              outline={false}
              onPress={handleGoToCart}
              bG={secondaryColor}
              color={primaryColor}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default VendorFoodCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  screenContainer: {
    paddingHorizontal: 16,
    position: "relative",
    paddingVertical: 10,
  },
  foodScroll: {
    paddingHorizontal: 20,
  },
  filter: {
    backgroundColor: backgroundColor,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    paddingBottom: 20,
  },
  food: {
    fontFamily: "satoshi-medium",
    color: gray100,
  },
  scrollContainer: {
    marginTop: 20,
  },
  btn: {},
  btnContainer: {
    backgroundColor: backgroundColor,
    paddingVertical: 10,
  },
  scroll: {
    height: "60%",
  },
});
