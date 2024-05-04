import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ProfileNavigator from "./ProfileNavigator";
import OrderNavigator from "./OrderNavigator";
import VendorNavigator from "./VendorNavigation";
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen name="OrderNavigator" component={OrderNavigator} />
      <Stack.Screen name="VendorNavigator" component={VendorNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
