import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../../styles/OrderSingle';

type OrderSingleHistoryProps = {
  title: string;
  price: string;
  date: string;
  status: string;
  onPress: () => void;
};

const OrderSingleHistory = ({
  title,
  price,
  date,
  status,
  onPress,
}: OrderSingleHistoryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image source={require('../../assets/orderHistory.png')} />
        <View style={styles.txtContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            {status === 'Delivered' ? (
              <TouchableOpacity style={styles.reOrderBtn} onPress={onPress}>
                <Text style={styles.reOrderText}>Reorder</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <View style={styles.orderDetails}>
        <Text>{date}</Text>
        <View style={styles.detailsSeparator} />
        <Text>{status}</Text>
      </View>
    </View>
  );
};

export default OrderSingleHistory;
