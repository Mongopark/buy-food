import React, { useCallback, useEffect, useState } from "react";
import { BackHandler, ImageBackground, StyleSheet, Text, View } from "react-native";
import MenuHeader from "../../components/header/MenuHeader";
import {
  backgroundColor,
  grey200,
  primaryColor,
  secondaryColor,
} from "../../constants/colors";
import DishesCard from "../../components/cards/OptionsCard";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/button/MainButton";
import { NavigationProp, RouteProp, useFocusEffect, useNavigation } from "@react-navigation/native";
import api from "../../api";
import { useCustomerStore, ISelectedDish } from "../../store";
import { TabParamList } from "../../navigation/BottomTabNavigator";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { IDish, IDishOption, IFoodItem, IFoodPack } from "../../types/restaurant.interface";
import CheckBox from "../../components/utilities/CheckBox";
import PackCard from "../../components/cards/PackCard";


type Props = BottomTabScreenProps<TabParamList, 'VendorMenu'>; 


const VendorMenu = ({ route, navigation }: Props) => {
  const dish = route.params.dish;
  const [ dishOpts, setDishOpts ] = useState<IDishOption[]>([]);
  const [foodPacks, setFoodPacks] = useState<IFoodPack[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const {
    accessToken,
    customerDishes,
    dishUpdated,
    updateCart,
    clearCart,
    cartRestaurantId,
    updateCartRestaurantId,
    opts,
    updateDishOptionMap
  } = useCustomerStore((state) => ({
    accessToken: state.accessToken,
    updateFoodPack: state.updateFoodPack,
    customerDishes: state.customerDishes,
    dishUpdated: state.dishUpdated,
    updateCart: state.updateCart,
    cartRestaurantId: state.cartRestaurantId,
    updateCartRestaurantId: state.updateCartRestaurantId,
    clearCart: state.clearCart,
    opts: state.options,
    updateDishOptionMap: state.updateOpts,
  }));

  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'NGN',
  });

  useEffect(() => {
    async function getAllDishOptions() {
      const res = await api.get(`/customers/dish/options/all/${dish.id}`, {
        headers: {
          "Authorization": `Bearer ` + accessToken
        }
      });

      const options: IDishOption[] = res.data.data.dishOptions.map((dishOpt: IDishOption) => ({
        ...dishOpt,
        foodItems: dishOpt.foodItems.map((item: IFoodItem) => (
          { ...item, selected: false })),
      }));

      const packs: IFoodPack[] = res.data.data.foodPacks.map((pack: IFoodPack) => ({ ...pack, selected: false }))

      setDishOpts(options);
      setFoodPacks(packs);

      console.log("the opts: ", options);
      console.log("the packs: ", packs);
    }
    //   // console.log("the opts: ", options);

    //   // console.log("===================================================");
    //   // console.log("dish options", dishOpts);
    //   // console.log("food packs", foodPacks);
    // }

    console.log("the dish opt map: ", opts);

    getAllDishOptions();
    getTotalDishPrice();
    
    console.log("i ran....");
  }, [dish.id]);

  useEffect(() => {
    getTotalDishPrice();
  }, [dishUpdated]);

  const getTotalDishPrice = () => {
    let existingDish = customerDishes.find((existingDish) => existingDish.id === dish.id);

    console.log("i the price updater ran...")

    if (existingDish !== undefined) {
      // const quantity = existingDish.quantity > 0 ? existingDish.quantity : 0;
      // const dishPrice = existingDish.price;
      // const foodPackPrice = existingDish.foodPack !== undefined ? existingDish.foodPack.price : 0;
      // let dishOptionsTotal: number;

      // const dishOptsTotal = existingDish.dishOptions.map((opt) => opt.foodItems.map((item) => item.price));
      
      // const calcTotal = dishOptsTotal.map((optPriceArr) => optPriceArr.reduce((acc, curr) => acc + curr), 0);
      
      // dishOptionsTotal = calcTotal.reduce((acc, curr) => acc + curr, 0);

      // console.log(dishPrice)
      // console.log(dishOptionsTotal)
      // console.log(foodPackPrice)
      // console.log(quantity)

      // setTotalPrice((dishPrice + foodPackPrice + dishOptionsTotal) * quantity);
      // console.log("the price for one: ", existingDish.cumPrice);
      
      //* i am setting total price to the price of this dish with all the dishopts and foodpack totalled
      setTotalPrice(existingDish.cumPrice);
    } else {
      setTotalPrice(0);
    }
  }

  useFocusEffect(
    useCallback(() => {
      function backHandler() {
        navigation.navigate('VendorSelection', { item: route.params.restaurant });
        return true;
      }

      const backListener = BackHandler.addEventListener('hardwareBackPress', backHandler);
      return () => {
        backListener.remove();
      }
    }, [])
  )

  // const calculateTotal = (dish: ISelectedDish): number => {
   
  // }

  const handleAddToCart = (dishId: string) => {
    const dishToAdd = customerDishes.find((existingDish) => existingDish.id === dishId);

    if (dishToAdd !== undefined) {

      if (cartRestaurantId !== route.params.restaurant.id) clearCart();

      updateCart(dishToAdd, 'migrate');
      updateCartRestaurantId(route.params.restaurant.id);
      navigation.navigate('Checkout', { restaurant: route.params.restaurant });
    } else {
      console.log("nothing to add..."); 
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/burgerBg.png")}
        style={styles.background}
      >
        <View style={styles.menuContainer}>
          <MenuHeader />
        </View>
      </ImageBackground>

      <View style={styles.screenContainer}>
        <Text style={styles.title}>{ dish.name }</Text>
        <Text style={styles.price}>₦{ formatter.format(dish.price) }</Text>
        <Text style={styles.desc}>
          { dish.description }
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          {(dishOpts.length > 0) ? (
            <>
              {dishOpts.map((opt) => (
                <DishesCard key={opt.id} dishOption={opt} dishId={route.params.dish.id} />
              ))}
            </>
          ): (
            <Text>No DishOptions Available!</Text>
          )}
          {(foodPacks.length > 0) ? (
            <PackCard packs={foodPacks} dishId={ route.params.dish.id }/>
          ): (
            null
          )}
        </ScrollView>
        <View>
          <MainButton
            title={`Add to cart ₦${formatter.format(totalPrice)}`}
            color={primaryColor}
            bG={secondaryColor}
            outline={false}
            onPress={() => handleAddToCart(dish.id)}
          />
        </View>
      </View>
    </View>
  );
};

export default VendorMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  background: {
    width: "100%",
    height: 210,
  },
  menuContainer: {
    paddingTop: 0,
  },
  screenContainer: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontFamily: "satoshi-bold",
    fontSize: 20,
    color: primaryColor,
  },
  price: {
    fontSize: 14,
    marginVertical: 10,
  },
  desc: {
    fontSize: 14,
    color: grey200,
    fontFamily: "satoshi-regular",
    marginBottom: 5,
  },
  scroll: {
    height: "65%",
    marginVertical: 15,
  },
});
