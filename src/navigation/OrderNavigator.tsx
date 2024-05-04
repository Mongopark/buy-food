import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReOrder from "../screens/orderHistory/ReOrder";
import CheckoutScreen from "../screens/checkout/CheckoutScreen";
import OrderTracking from "../screens/orderTracking/OrderTracking";
import ReviewTracking from "../screens/orderTracking/ReviewTracking";
import FeedBack from "../screens/orderTracking/FeedBack";
import AddNewAddress from "../screens/checkout/AddNewAddress";
import PlacingOrder from "../screens/checkout/PlacingOrder";
import OrderPlaced from "../screens/checkout/OrderPlaced";
import {
  ChangeOfAddress,
  ChangeOfAddressMap,
  ConfirmAddressDetails,
} from "../screens/changeOfAddress";

const Stack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
      <Stack.Screen name="OrderFeedback" component={FeedBack} />
      <Stack.Screen name="ReviewOrder" component={ReviewTracking} />
      <Stack.Screen name="OrderTracking" component={OrderTracking} />
      <Stack.Screen name="PlacingOrder" component={PlacingOrder} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
      <Stack.Screen name="ChangeOfAddressMap" component={ChangeOfAddressMap} />
      <Stack.Screen
        name="ConfirmAddressDetails"
        component={ConfirmAddressDetails}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
