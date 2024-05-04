import React, { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft2,
  Card,
  Clock,
  Location,
  Moneys,
} from "iconsax-react-native";
import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  backgroundColor,
  grey300,
  grey500,
  grey900,
  primaryColor,
  secondaryColor,
} from "../../constants/colors";
import Satoshi from "../../components/fonts/satoshi";
import OrderCard from "../../components/cards/OrderCard";
import { FOOD_1 } from "../../assets";
import styles from "../../styles/screens/checkoutScreen.styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import TextAloneHeader from "../../components/header/TextAloneHeader";
import { Text } from "react-native";
import MainButton from "../../components/button/MainButton";
import ModalView from "../../components/modal/Modal";
import GoBackHeader from "../../components/header/GoBackHeader";
// import {RootState} from '../../redux/store';
import { ISelectedDish, useCustomerStore } from "../../store";
import { TabParamList } from "../../navigation/BottomTabNavigator";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { acc } from "react-native-reanimated";
import api, { AxiosError } from "../../api";

type Props = BottomTabScreenProps<TabParamList, 'Checkout'>;

const CheckoutScreen = ({ navigation, route }: Props) => {
  const [additionalFeeModal, setAdditionalFeeModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [riderComment, setRiderComment] = useState<string>("");
  const [restaurantComment, setRestaurantComment] = useState<string>("");
  const [aptNo, setAptNo] = useState<string>("");
  const { accessToken, updateCart, cart, clearCart, customer } = useCustomerStore((state) => ({
    accessToken: state.accessToken,
    customer: state.customer,
    updateCart: state.updateCart,
    cart: state.cart,
    clearCart: state.clearCart,
  }));

  // const [dishes, setDishes] = useState<ISelectedDish[]>(cart);

  // const location = useSelector((state: RootState) => state.location);

  useEffect(() => {
    
  }, [cart]);

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

  const getTotalCartValue = (): number => {
    const arrOfCartPrices = cart.map((cartItem) => cartItem.totalDishPrice);
    return arrOfCartPrices.reduce((acc, curr) => acc + curr, 0)
  }

  const handleConfirmOrder = async () => {
    const orderItemsPayload = cart.map((cartItem) => {
      if (cartItem.foodPack === undefined) {
        return {
          dishId: cartItem.id,
          quantity: cartItem.quantity,
          price: cartItem.totalDishPrice,
          dishoptions: cartItem.dishOptions.map((option) => (option.name + ": " + option.foodItems.join(','))),
        }
      }

      return {
        dishId: cartItem.id,
        quantity: cartItem.quantity,
        price: cartItem.totalDishPrice,
        dishoptions: cartItem.dishOptions.map((option) => (option.name + ": " + option.foodItems.join(','))),
        foodPack: cartItem.foodPack?.name,        
      }
    });

    const orderPayload = {
      orderItems: orderItemsPayload,
      riderComment: riderComment,
      vendorComment: restaurantComment,
      price: getTotalCartValue() + 700 + 100,
    }

    console.log(orderPayload);

    try {
       const orderResponse = await api.post('/customers/order/create', orderPayload, {
        "headers": {
          "Authorization": "Bearer " + accessToken
        }
       });
      
       console.log(orderResponse.data);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.response?.data);
      }
    }

    // setAdditionalFeeModal(true);
  };

  const handlGotIt = () => {
    setAdditionalFeeModal(false);
    setPaymentModal(true);
  };

  const handlePayOnDelivery = () => {
    setPaymentModal(false);
    // navigation
  };

  const handleAddressChange = () => {
    navigation.navigate('ChangeOfAddress');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={backgroundColor}
        translucent={true}
        barStyle={"dark-content"}
      />
      <GoBackHeader title="Checkout" />
      <View style={styles.contentContainer}>
        <ScrollView style={styles.main}>
          <Satoshi style={styles.header}>Your order</Satoshi>
          {cart.length > 0 ?
            (<View style={styles.orderCardWrapper}>
              {cart.map((cartItem, index) => (
                <OrderCard
                  incQuantity={() => updateCart(cartItem, 'add')}
                  decQuantity={() => updateCart(cartItem, 'remove')}
                  key={cartItem.id + '_' + index}
                  dish={cartItem}
                  currentPrice={1500.0}
                  initialPrice={2500.0}
                  description="Description: Lorem ipsum & seit dolors"
                  quantity={cartItem.quantity}
                  image={FOOD_1}
                  name={cartItem.name}
                />
              ))}
            </View>) : null }
          <View style={styles.comment}>
            <TextInput
              value={ restaurantComment }
              onChangeText={(text) => setRestaurantComment(text)}
              style={styles.input}
              placeholder="Leave a comment for the restaurant (optional)"
              placeholderTextColor={grey300}
            />
          </View>
          <View style={styles.deliveryDetails}>
            <Satoshi style={styles.header}>Delivery details</Satoshi>
            <View>
              <View style={styles.timeDetails}>
                <Clock color={grey300} />
                <Satoshi style={styles.deliveryDetailsText}>
                  { route.params.restaurant.eta }
                </Satoshi>
              </View>
              <View style={styles.locationDetails}>
                <Location color={grey300} size={24} />
                <View>
                  <Satoshi style={styles.deliveryDetailsText}>
                    {/* {location.address} */}
                    <Satoshi style={styles.deliveryDetailsText}>
                      Admiralty road, Lekki phase 1
                    </Satoshi>
                  </Satoshi>
                  <TouchableOpacity onPress={() => handleAddressChange()}>
                    <Satoshi style={styles.changeLocation}>Change</Satoshi>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* {location.coordinates.latitude && location.coordinates.longitude ? (
							<MapView
								style={styles.map}
								initialRegion={{
									latitude: location?.coordinates?.latitude || 0,
									longitude: location?.coordinates?.longitude || 0,
									latitudeDelta: 0.001,
									longitudeDelta: 0.001,
								}}
							>
								<Marker
									coordinate={{
										latitude: location?.coordinates?.latitude || 0,
										longitude: location?.coordinates?.longitude || 0,
									}}
									title="Current Location"
									description="This is your current location"
								/>
							</MapView>
						) : (
							<View style={styles.map} />
						)} */}
            <TextInput
              keyboardType="numeric"
              value={aptNo}
              onChangeText={(text) => setAptNo(text)}
              style={styles.input}
              placeholder="Apt./office/floor no"
              placeholderTextColor={grey300}
            />
            <TextInput
              value={riderComment}
              onChangeText={(text) => setRiderComment(text)}
              style={[styles.input, styles.deliveryInstruction]}
              placeholder="Delivery instructions (optional)"
              placeholderTextColor={grey300}
            />
          </View>
          <View style={styles.paymentMethodContainer}>
            <TextAloneHeader title="Payment method" />
            <View style={styles.paymentDetailsRow}>
              <View style={styles.paymentDetailsRow}>
                <Moneys size={24} color={secondaryColor} />
                <View style={styles.colContainer}>
                  <Text style={styles.deliveryDetailsText}>
                    Pay on delivery
                  </Text>
                  <Text style={styles.changeLocation}>Change</Text>
                </View>
              </View>
              <Text style={styles.price}>₦{ getTotalCartValue() + 700 + 100 }</Text>
            </View>
          </View>
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Summary</Text>
            <View style={styles.summaryColContainer}>
              <View style={styles.summaryRowContainer}>
                <Text style={styles.summaryText}>Subtotal</Text>
                <Text style={styles.summaryValue}>₦{ getTotalCartValue() }</Text>
              </View>
              <View style={styles.summaryRowContainer}>
                <Text style={styles.summaryText}>Delivery fee</Text>
                <Text style={styles.summaryValue}>₦700.00</Text>
              </View>
              <View style={styles.summaryRowContainer}>
                <Text style={styles.summaryText}>Service Charge</Text>
                <Text style={styles.summaryValue}>₦100.00</Text>
              </View>
            </View>
            <View style={styles.summaryRowContainer}>
              <Text style={styles.summaryBoldText}>Total</Text>
              <Text style={styles.summaryBoldText}>₦{ getTotalCartValue() + 700 + 100 }</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <MainButton
              title="Confirm order"
              bG={secondaryColor}
              color={primaryColor}
              onPress={() => handleConfirmOrder()}
              outline={false}
            />
          </View>
        </ScrollView>
      </View>
      <ModalView
        modalVisible={additionalFeeModal}
        setModalVisible={setAdditionalFeeModal}
        children={
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Additional fee</Text>
            <Text style={styles.modalDesc}>
              Due to the ongoing rainy situation, an additional delivery fee had
              to be added to your payment.
            </Text>
            <MainButton
              title="Got it"
              outline={false}
              onPress={() => handlGotIt()}
              bG={secondaryColor}
              color={primaryColor}
            />
          </View>
        }
      />
      {/* choose payment method modal */}
      <ModalView
        modalVisible={paymentModal}
        setModalVisible={setPaymentModal}
        children={
          <View style={styles.modalContainer}>
            <Text style={styles.paymentTitle}>Choose payment method</Text>
            <TouchableOpacity style={styles.paymentStyle}>
              <Card size={24} color={grey900} />
              <Text>Pay now</Text>
            </TouchableOpacity>
            <View style={styles.borderBetween} />
            <TouchableOpacity
              style={styles.paymentStyle}
              onPress={() => handlePayOnDelivery()}
            >
              <Moneys size={24} color={grey900} />
              <Text>Pay on delivery</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};
export default CheckoutScreen;
