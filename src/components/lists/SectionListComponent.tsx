import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  SectionList,
  FlatList,
  Pressable,
  Text,
  StatusBar,
  ViewToken,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sectionListGetItemLayout } from "../../utils/sectionListGetItemLayout";
import { SECTION_LIST_DATA } from "../../utils/sectionListData";
import {
  backgroundColor,
  grey500,
  lightText,
  primaryColor,
  secondaryColor,
  textColor,
} from "../../constants/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Satoshi from "../fonts/satoshi";
import { Add, Minus } from "iconsax-react-native";
import MainButton from "../button/MainButton";
import { IDish, IDishOption, IFoodItem, IFoodPack, IMenuDishList, IRestaurantItem } from "../../types/restaurant.interface";
import { TabParamList } from "../../navigation/BottomTabNavigator";
import { useCustomerStore } from "../../store";
import api from "../../api";

const WIDTH = Dimensions.get("window").width - 40;
//

type QuantityAction = 'plus' | 'minus';

interface Props {
  restaurant: IRestaurantItem
  sectionData: IMenuDishList[]
}

export const SectionListComponent = ({ sectionData, restaurant }: Props) => {
  // console.log("The section data:", sectionData);
  const { navigate } = useNavigation<NavigationProp<TabParamList>>();
  const {
    accessToken,
    updateCustomerDishes,
    customerDishes,
    dishUpdated,
    cartRestaurant,
    clearCart,
    updateCartRestaurantId,
    updateCart
  } = useCustomerStore((state) => ({
    updateCustomerDishes: state.updateCustomerDishes,
    accessToken: state.accessToken,
    customerDishes: state.customerDishes,
    dishUpdated: state.dishUpdated,
    cartRestaurant: state.cartRestaurantId,
    clearCart: state.clearCart,
    updateCartRestaurantId: state.updateCartRestaurantId,
    updateCart: state.updateCart,
  }));
  const listRef = useRef<SectionList>(null);
  const chipListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [chipPressed, setChipPressed] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'NGN',
  });

  useEffect(() => {
    setTotal(calculateTotal());
  }, [dishUpdated]);

  const handleGoToOptions = (dish: IDish) => {
    navigate("VendorMenu", { dish, restaurant })
  };

  const calculateTotal = (): number => {
    const dishTotals = customerDishes.map((dish) => {
      const quantity = dish.quantity > 0 ? dish.quantity : 0;
      const dishPrice = dish.price;
      const foodPackPrice = dish.foodPack !== undefined ? dish.foodPack.price : 0;
      let dishOptionsTotal: number;

      const dishOptsTotal = dish.dishOptions.map((opt) => opt.foodItems.map((item) => item.price));
      
      const calcTotal = dishOptsTotal.map((optPriceArr) => optPriceArr.reduce((acc, curr) => acc + curr), 0);
      
      dishOptionsTotal = calcTotal.reduce((acc, curr) => acc + curr, 0);

      // console.log(dishPrice)
      // console.log(dishOptionsTotal)
      // console.log(foodPackPrice)
      // console.log(quantity)

      return (dishPrice + foodPackPrice + dishOptionsTotal) * quantity;
    });

    const sumTotal = dishTotals.reduce((acc, curr) => acc + curr, 0);

    return sumTotal;
  }

  const getStoredQuantity = (dishId: string): number => {
    let existingDish = customerDishes.find((dish) => dish.id === dishId);

    if (existingDish === undefined) {
      return 0;
    } else {
      return existingDish.quantity;
    }
  }

  const getTotal = (dishId: string): number => {
    let existingDish = customerDishes.find((dish) => dish.id === dishId);

    if (existingDish === undefined) {
      return 0;
    } else {
      return existingDish.totalDishPrice;
    }
  }

  const handleAddToCart = () => {

  }

  const getItemLayout = sectionListGetItemLayout({
    getItemHeight: () => 38,
    getSectionHeaderHeight: () => 44,
  });

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0] && !viewableItems[0].index && !chipPressed) {
      const index = viewableItems[0].section.index;
      if (index !== activeIndex) {
        setActiveIndex(index);
        if (chipListRef?.current) {
          chipListRef.current.scrollToIndex({
            animated: true,
            index: SECTION_LIST_DATA[index].index,
            viewPosition: 0.5,
          });
        }
      }
    }
  };

  const onScrollToIndexFailed = () => {
    if (chipListRef?.current) {
      chipListRef.current.scrollToIndex({
        animated: true,
        index: 0,
        viewPosition: 0,
      });
    }

    if (listRef?.current) {
      listRef.current.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex: 0,
        viewPosition: 0,
      });
    }
  };

  //* here and section list
  const renderItem = ({ item }: { item: IDish }) => {
    const quantity = getStoredQuantity(item.id);

    // console.log("i am re rendering o");
    // console.log("the quantity....", quantity);

    // useEffect(() => {
    //   setQuantity(getStoredQuantity(item.id));
    //   console.log("this ran the use effect in the renderitem section function...");
    // }, [item.id]);


    const handleQuantityToggle = async (dish: IDish, actionType: QuantityAction) => {
      if (actionType === 'plus') {

        if (restaurant.id !== cartRestaurant) clearCart();

        updateCartRestaurantId(restaurant.id);

        // console.log(dishToAddToCart);

        async function hasDishOptions(dishId: string): Promise<boolean> {
          
          // console.log("dish i want to do something with: ", dishId);

          if (dishId === undefined) return false;

          const res = await api.get(`/customers/dish/options/all/${dishId}`, {
            headers: {
              "Authorization": `Bearer ` + accessToken
            }
          });

          const options: IDishOption[] = res.data.data.dishOptions.map((dishOpt: IDishOption) => ({
            ...dishOpt,
            foodItems: dishOpt.foodItems.map((item: IFoodItem) => (
              { ...item, selected: false })),
          }));
          
          if (options.length > 0) return true;

          return false;
        }

        const hasOpt = await hasDishOptions(dish.id);

        console.log(hasOpt);

        if (hasOpt) {
          updateCustomerDishes({
            ...dish,
          }, 'add');
          navigate('VendorMenu', { dish, restaurant });
        } else {
          const dishToAdd = customerDishes.find((existingDish) => existingDish.id === dish.id);
          
          if (dishToAdd !== undefined) {
            updateCart(dishToAdd, 'migrate');
            updateCustomerDishes({
              ...dish,
            }, 'add');
            navigate('Checkout', { restaurant });
          }
        } 

        // setQuantity(quantity + 1);
      }
  
      if (getStoredQuantity(dish.id) > 0 && actionType === 'minus') {

        // const existingDish = customerDishes.find((eDish) => eDish.id === dish.id);

        updateCustomerDishes({
          ...dish,
        }, 'remove');

        // setQuantity(quantity - 1);
      }
    }

    const handleOrder = () => {
      // navigate("FoodCategory");
    };
  
    return (
      <View style={styles.itemContainer}>
        <View style={styles.dish}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/img.png")}
              style={styles.icon}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity disabled={ customerDishes.find((dish) => dish.id === item.id) === undefined } onPress={() => handleGoToOptions(item)}>
            <View style={styles.itemWrapper}>
              <Text style={styles.dropdownItem}>{item.name}</Text>
              <Text style={styles.description}>
                { item.description }
              </Text>
            </View>
            <View>
              <Text style={styles.price}>{ '₦' + formatter.format(item.price) }</Text>
            </View>
          </TouchableOpacity>
        </View>
    
        <View style={styles.quantityContainer}>
          <View style={styles.reduce}>
            {
              quantity > 0 ?
                <>
                   <Satoshi style={styles.quantity}>{quantity}x</Satoshi>
                    <TouchableOpacity
                      disabled={quantity === 0}
                      onPress={() => handleQuantityToggle(item, 'minus')}
                    >
                      <Minus color={grey500} />
                    </TouchableOpacity>
                </>
              : null
            }
          </View>
          <TouchableOpacity onPress={() => handleQuantityToggle(item, 'plus')}>
            <Add color={grey500} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const scrollToListItem = (index: number) => {
    setActiveIndex(index);
    setChipPressed(true);

    if (listRef?.current) {
      listRef.current.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex: index,
        viewPosition: 0,
      });
    }
    if (chipListRef?.current) {
      chipListRef.current.scrollToIndex({
        animated: true,
        index: index,
        viewPosition: 0.5,
      });
    }

    setTimeout(() => {
      setChipPressed(false);
    }, 300);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar
				barStyle={"light-content"}
				backgroundColor="#fff"
				translucent={true}
			/> */}
      {/* <FlatList
				data={SECTION_LIST_DATA}
				ref={chipListRef}
				style={styles.chipList}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item, index) => item + index}
				bounces={false}
				initialNumToRender={10}
				renderItem={({ item, index }) => {
					const { title } = item;
					const isActiveItem = activeIndex === index;
					return (
						<Pressable
							onPress={() => scrollToListItem(index)}
							style={{
								...styles.chip,
								backgroundColor: isActiveItem ? "#000" : "transparent",
								borderColor: isActiveItem ? "transparent" : "#000",
							}}
							key={title}
						>
							<Text
								style={{
									...styles.chipText,
									color: isActiveItem ? "#fff" : "#000",
								}}
							>
								{title}
							</Text>
						</Pressable>
					);
				}}
			/> */}
      <View></View>
        <SectionList
          sections={sectionData}
          ref={listRef}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          onScrollToIndexFailed={() => onScrollToIndexFailed()}
          showsVerticalScrollIndicator={false}
          bounces={false}
          stickySectionHeadersEnabled={false}
          scrollEventThrottle={16}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          renderSectionHeader={({ section: { title } }) => (<Text> {title} </Text>)}
          getItemLayout={getItemLayout as any}
        />
      <View style={styles.btn}>
        <View style={styles.btnContainer}>
          {customerDishes.some(dish => dish.quantity > 0) ?
            <MainButton
              title={`Go to cart • ₦${formatter.format(total)}`}
              outline={false}
              onPress={() => handleAddToCart()}
              bG={secondaryColor}
              color={primaryColor}
            /> : null
          }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 80,
    height: 80,
    overflow: "hidden",
    borderRadius: 8,
  },
  itemWrapper: {
    flex: 1,
    gap: 10,
  },
  dish: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 5,
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 0.17,
    borderColor: lightText,
  },
  itemContainer: {
    borderColor: lightText,
    width: WIDTH,
  },
  description: {
    fontSize: 14,
    color: lightText,
    fontWeight: "400",
  },
  price: {
    fontSize: 14,
    color: "#2f2f2f",
    fontWeight: "400",
  },
  dropdownItem: {
    fontSize: 16,
    color: textColor,
    fontWeight: "500",
  },
  sectionHeader: {
    fontSize: 15,
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: "500",
    marginTop: 15,
  },
  chipList: {
    marginBottom: 20,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  chipText: {
    fontSize: 13,
    color: "#000",
    height: 15,
  },
  quantityContainer: {
    marginTop: 4,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 3.5,
    paddingBottom: 3.5,
  },
  quantity: {
    fontWeight: "700",
    color: grey500,
    fontSize: 16,
    fontFamily: "satoshi-bold",
    lineHeight: 20.83,
  },
  reduce: {
    flexDirection: "row",
    gap: 16,
  },
  btn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  btnContainer: {
    backgroundColor: backgroundColor,
    paddingVertical: 10,
  },
});
