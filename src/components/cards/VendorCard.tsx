import { Star1 } from "iconsax-react-native";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { textColor } from "../../constants/colors";
import { styles } from "../../styles/VendorCard.styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../navigation/BottomTabNavigator";
import { IRestaurantItem } from "../../types/restaurant.interface";

interface IVendorCardProps {
	item: IRestaurantItem
}

const VendorCard = ({ item }: IVendorCardProps) => {
  const { navigate } = useNavigation<NavigationProp<TabParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigate('VendorSelection', { item })}
      style={styles.itemContainer}
    >
      {/* just for now */}
      <Image
        // source={item && item.image ? { uri: item.image } : item.image}
        source={require("../../assets/food1.png")}
        style={styles.image}
      />
      <View style={styles.labelWrapper}>
        <Text style={styles.name}>{item.name || 'a boy'}</Text>
        <View style={styles.ratingContainer}>
          <Star1 size="10" color={textColor} variant="Bold" />
          <Text style={styles.rating}> {item.rating}</Text>
        </View>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoLabel}> {item.eta}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VendorCard;
