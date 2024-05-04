import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import TextAloneHeader from "../../components/header/TextAloneHeader";
import { backgroundColor } from "../../constants/colors";
import OrderCard from "../../components/cards/OrderCard";
import { FOOD_1 } from "../../assets";

const ReOrder = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader title="Vendor’s name" />
      <View style={styles.screenContainer}>
        <TextAloneHeader title="Your order" />

        {/* <OrderCard
            currentPrice={1500.0}
            initialPrice={2500.0}
            description="Description: Lorem ipsum & seit dolors"
            quantity={1}
            image={FOOD_1}
            name="Food name: Lorem ipsum & seit dolors"
          /> */}
        <ScrollView>
          <OrderCard
            currentPrice={1500.0}
            initialPrice={2500.0}
            description="Description: Lorem ipsum & seit dolors"
            quantity={1}
            image={FOOD_1}
            name="Food name: Lorem ipsum & seit dolors"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ReOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  screenContainer: {
    paddingHorizontal: 16,
  },
});
