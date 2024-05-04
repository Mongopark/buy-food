import { Image, ScrollView, ScrollViewBase, Text, View } from "react-native";
import React from "react";
import OrderCard from "../cards/OrderCard";
import { FOOD_1 } from "../../assets";
import ProgressBar from "../progressbar/ProgressBar";
import { styles } from "../../styles/Reorder";
import TextAloneHeader from "../header/TextAloneHeader";

const FifthModalTracking = () => {
  return (
    <View style={styles.scrollDetails}>
      <View style={styles.headerContainer}>
        <Text style={styles.screenTxt}>Your order has been delivered</Text>
        <Text style={styles.desc}>
          Enjoy your order. Please don’t forget to rate your experience with the
          rider and the restaurant.{" "}
        </Text>
      </View>
      <ProgressBar steps={5} currentStep={4} />

      {/* MAP */}
      <View style={styles.orderContainer}>
        <TextAloneHeader title="Your order" />
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

export default FifthModalTracking;
