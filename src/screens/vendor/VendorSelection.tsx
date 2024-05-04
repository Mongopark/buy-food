import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/VendorSelection.styles";
import { ArrowLeft2, ExportCurve, Heart, Star1 } from "iconsax-react-native";
import { TabParamList } from "../../navigation/BottomTabNavigator";
import { SectionListComponent } from "../../components/lists/SectionListComponent";
import SearchInput from "../../components/inputs/SearchInput";
import { primaryColor } from "../../constants/colors";
import api, { AxiosError } from "../../api";
import { useCustomerStore } from "../../store";
import { IMenuDishList, IMenuItem } from "../../types/restaurant.interface";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = BottomTabScreenProps<TabParamList, 'VendorSelection'>

const VendorSelection = ({ route }: Props) => {
  const routeItem = route.params.item;
  const navigation = useNavigation();
  const { accessToken, updateOpts, opts } = useCustomerStore((state) => ({
    accessToken: state.accessToken,
    updateOpts: state.updateOpts,
    opts: state.options,
  }));

  const [menuDishList, setMenuDishList] = useState<IMenuDishList[]>([]);

  useEffect(() => {
    // async function getAllDishOptions(dishId: string): Promise<{dishOpts: IDishOption[], foodPacks: IFoodPack[]}> {
    //   const res = await api.get(`/customers/dish/options/all/${dishId}`, {
    //     headers: {
    //       "Authorization": `Bearer ` + accessToken
    //     }
    //   });

    //   const options: IDishOption[] = res.data.data.dishOptions.map((dishOpt: IDishOption) => ({
    //     ...dishOpt,
    //     foodItems: dishOpt.foodItems.map((item: IFoodItem) => (
    //       { ...item, selected: false })),
    //   }));

    //   const packs: IFoodPack[] = res.data.data.foodPacks.map((pack: IFoodPack) => ({ ...pack, selected: false }));
      
    //   return { dishOpts: options, foodPacks: packs }
    // }
    
    async function getAllDishes() {
      try {
        const res = await api.get(`/customers/restaurants/menus/${routeItem?.id}`, {
          headers: {
            "Authorization": "Bearer " + accessToken
          }
        });

        const { data } = res.data;

        if (data.length > 0) {
          const menuDishes: IMenuDishList[] = res.data?.data?.map((menuItem: IMenuItem) => ({
            title: menuItem.name,
            data: menuItem.dishes.map((dish: any) => ({
              name: dish.name,
              available: dish.available,
              price: menuItem.name === 'promotions' ? dish.newPrice : dish.price,
              description: dish.description,
              id: dish.id,
              // isPromotion: menuItem.name === 'promotions' ? true : false,
              oldPrice: menuItem.name === 'promotions' ? dish.price : 0,
            }))
          }));

          //* find promotions menu
          const promotionsIndex = menuDishes.findIndex((dishList) => dishList.title === 'promotions');

          // console.log("this stuff runs...")
          // for (const list of menuDishes) {
          //   console.log(list);
          //   for (const dish of list.data) {
          //     const { dishOpts, foodPacks } = await getAllDishOptions(dish.id)
          //     console.log("something else");
          //     console.log(`dishId: ${dish.id}`, dishOpts, foodPacks);
          //     updateOpts(dish.id, dishOpts, foodPacks, 'migrate');
          //   }
          // }

          //* if promotions exist
          if (promotionsIndex > 0) {
            //* swap with the first list
            const firstMenuItem = menuDishes[0];
  
            menuDishes[0] = menuDishes[promotionsIndex];
  
            menuDishes[promotionsIndex] = firstMenuItem;

            setMenuDishList(menuDishes);
          } else {
            setMenuDishList(menuDishes);
          }
        } else {
          console.log("modifying the length...");
          setMenuDishList([]);
        }

        // console.log("Menu Dishes: ", menuDishList);

        // console.log(routeItem?.id)

        // console.log("raw data: ", res.data);
        // console.log("the dishes...", menuDishes);

      } catch (e) {
        if (e instanceof AxiosError) {
          console.log(e.response?.data);
        }
      }
    }

    getAllDishes();
    console.log(routeItem.id, "restaurant id.........");
    console.log(menuDishList.length);
    
  }, [routeItem.id]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSearch = (e: any) => {
    console.log(e, "dddj");
  };

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);

  return (
    <View style={styles.container}>
      <AnimatedImageBackground
        // source={{ uri: routeItem.image }}
        source={require("../../assets/food1.png")}
        style={[styles.backgroundImage]}
      >
        <View style={styles.imageWrap}>
          <TouchableOpacity onPress={handleGoBack} style={styles.icon}>
            <ArrowLeft2 color="#ffffff" />
          </TouchableOpacity>
          <View style={styles.flex}>
            <TouchableOpacity style={styles.icon}>
              <ExportCurve size="20" color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Heart size="20" color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </AnimatedImageBackground>

      <View style={styles.vendorDetails}>
        <View style={styles.profileImageContainer}>
          <Image source={require("../../assets/vendorLogo.png")} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{routeItem?.name}</Text>
          <Text style={styles.desc}>{ routeItem?.address }</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.infoWrapper}>
            <Image
              source={require("../../assets/clock.png")}
              style={styles.imageIcon}
            />
            <Text style={styles.infoLabel}>15 - 20 mins</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Star1 color={primaryColor} variant="Bold" size={16} />

            <Text style={styles.infoLabel}>{ routeItem.rating }</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <SearchInput />
      </View>
      {menuDishList.length > 0 ? (
         <SectionListComponent sectionData={ menuDishList } restaurant={routeItem} />
      ) : <Text>{ 'No dishes to show for this vendor... :(' }</Text> }
    </View>
  );
};

export default VendorSelection;
