import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/onboarding/HomeScreen";
import CheckoutScreen from "../screens/checkout/CheckoutScreen";
import VendorSelection from "../screens/vendor/VendorSelection";
import VendorFoodCategory from "../screens/vendor/VendorFoodCategory";
import VendorMenu from "../screens/vendor/VendorMenu";

const Stack = createStackNavigator();

const VendorNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FoodCategory" component={VendorFoodCategory} />
      {/* <Stack.Screen name="Checkout" component={CheckoutScreen} /> */}
      <Stack.Screen name="VendorMenu" component={VendorMenu} />
    </Stack.Navigator>
  );
};

export default VendorNavigator;
