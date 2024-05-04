import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import OrderCard from "../cards/OrderCard";
import { FOOD_1 } from "../../assets";
import ProgressBar from "../progressbar/ProgressBar";
import { styles } from "../../styles/Reorder";
import TextAloneHeader from "../header/TextAloneHeader";

const SecondModalTracking = () => {
  return (
    <View style={styles.scrollDetails}>
      <View style={styles.headerContainer}>
        <Text style={styles.screenTxt}>Preparing your order</Text>
        <Text style={styles.desc}>Estimated delivery time: 11:40 AM</Text>
      </View>
      <ProgressBar steps={5} currentStep={1} />

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
        <View style={styles.mealImageContainer}>
          <Image source={require("../../assets/meal.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SecondModalTracking;
