import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Receipt1, User, Home } from "iconsax-react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/onboarding/HomeScreen";
import { Text } from "react-native";
import { secondaryColor } from "../constants/colors";
import ProfileScreen from "../screens/profile/ProfileScreen";
import MyOrders from "../screens/orderHistory/MyOrders";
import { ChangeOfAddress } from "../screens/changeOfAddress";
import ReOrder from "../screens/orderHistory/ReOrder";
import VendorSelection from "../screens/vendor/VendorSelection";
import { IDish, IRestaurantItem } from "../types/restaurant.interface";
import VendorMenu from "../screens/vendor/VendorMenu";
import CheckoutScreen from "../screens/checkout/CheckoutScreen";

export type TabParamList = {
  HomeTab: undefined;
  Home: undefined;
  Orders: undefined;
  Profile: undefined;
  Checkout: { restaurant: IRestaurantItem };
  VendorSelection: { item: IRestaurantItem };
  ChangeOfAddress: undefined;
  ReOrder: undefined;
  VendorMenu: { dish: IDish, restaurant: IRestaurantItem };
};

interface TabBarIconProps {
  color: string;
  size: number;
}

interface LabelProps {
  color: string;
}
const HomeLabel: React.FC<LabelProps> = ({ color }) => (
  <Text style={{ color: color }}>Home</Text>
);
const OrdersLabel: React.FC<LabelProps> = ({ color }) => (
  <Text style={{ color: color }}>Orders</Text>
);
const ProfileLabel: React.FC<LabelProps> = ({ color }) => (
  <Text style={{ color: color }}>Account</Text>
);

const HomeIcon: React.FC<TabBarIconProps> = ({ color, size }) => (
  <Home color={color} size={size} variant="Bold" />
);

const OrdersIcon: React.FC<TabBarIconProps> = ({ color, size }) => (
  <Receipt1 color={color} size={size} variant="Linear" />
);

const ProfileIcon: React.FC<TabBarIconProps> = ({ color, size }) => (
  <User color={color} size={size} variant="Linear" />
);

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<any>();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarActiveTintColor: secondaryColor,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
          tabBarLabel: HomeLabel,
          headerShown: false,
          headerTitle: "",
        }}
      />
       <Tab.Screen
        name="VendorMenu"
        component={VendorMenu}
        options={{
          headerShown: false,
          tabBarButton: () => null
        }}
      />
      <Tab.Screen
        name="Orders"
        component={MyOrders}
        options={{
          tabBarIcon: OrdersIcon,
          tabBarLabel: OrdersLabel,
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
          tabBarLabel: ProfileLabel,
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Tab.Screen
        name="ChangeOfAddress"
        component={ChangeOfAddress}
        options={{
          headerShown: false,
          tabBarButton: () => null
        }}
      />
      <Tab.Screen
        name="ReOrder"
        component={ReOrder}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name="VendorSelection"
        component={VendorSelection}
        options={{
          headerShown: false,
          tabBarButton: () => null
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerShown: false,
          tabBarButton: () => null
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  tabBar: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    height: 70,
  },
});
