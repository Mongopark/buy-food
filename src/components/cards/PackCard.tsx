import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  gray50,
  grey100,
  grey200,
  primaryColor,
  yellowFaint,
} from "../../constants/colors";
import CheckBox from "../utilities/CheckBox";
import { IFoodPack } from "../../types/restaurant.interface";
import { useCustomerStore } from "../../store";

interface SelectedPackInfo {
    pack: IFoodPack;
    dishId: string;
}

interface Props {
    packs: IFoodPack[];
    dishId: string;
}

// function isDishOption(obj: any): obj is IDishOption  {
//   return 'foodItems' in obj
// }
const PackCard = ({ packs, dishId }: Props) => {

    const [selectedPack, setSelected] = useState<SelectedPackInfo | null>(null);
    const { updateFoodPack, customerDishes, dishUpdated } = useCustomerStore((state) => ({
      customerDishes: state.customerDishes,
      updateFoodPack: state.updateFoodPack,
      dishUpdated: state.dishUpdated,
  }));

  useEffect(() => {
    let existingDishes = customerDishes.filter(dish => dish.id === dishId);

    if (existingDishes.length > 0) {
        const dishOfConcern = existingDishes[existingDishes.length - 1];
        if (dishOfConcern.foodPack !== undefined) {
            setSelected({ pack: dishOfConcern.foodPack, dishId: dishOfConcern.id }); 
        } else {
            setSelected(null);
        }
        
    } else {
        setSelected(null);
    }

    // console.log("what is picked in pack: ", selectedPack);
  }, [dishId, dishUpdated]);

  const handleCheckBoxPress = (pack: IFoodPack) => {
    setSelected({pack, dishId: dishId});
    updateFoodPack(pack, dishId, 'add');
    // console.log("food pack dishes: ", customerDishes);
  }

  return (
        <View>
            <View style={styles.dishes}>
                <Text style={styles.title}>Select your Pack</Text>
                <View style={styles.instruction}>
                    <Text style={styles.choose}>Choose at least 2 item</Text>
                    <Text style={styles.required}>Required</Text>
                </View>
                    <>
                    {packs.map((pack) => (
                        <View key={pack.id} style={styles.checkMeal}>
                            <Text style={styles.food}>{pack.name}</Text>
                            <View style={styles.priceContainer}>
                                <Text style={ styles.price }>{ '₦' + pack.price }</Text>
                            </View>
                            <CheckBox
                                isSelected={selectedPack?.pack.id === pack.id && selectedPack.dishId === dishId}
                                selectedItem={selectedPack}
                                foodItemId={pack.id}
                                dishId={dishId}
                                handleValueChange={ selectedPack?.pack.id !== pack.id ? () => handleCheckBoxPress(pack) : () => undefined}/>
                        </View>
                    ))}
                    </>
            </View>
        </View>
  );
};

export default PackCard;

const styles = StyleSheet.create({
  dishes: {
    paddingVertical: 15,
    borderBottomColor: gray50,
    borderBottomWidth: 1,
  },
  instruction: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "satoshi-bold",
    fontSize: 20,
    color: primaryColor,
  },
  choose: {
    fontSize: 14,
    color: grey200,
    fontFamily: "satoshi-regular",
  },
    required: {
        fontSize: 14,
        color: primaryColor,
        fontFamily: "satoshi-regular",
        backgroundColor: yellowFaint,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },

    priceContainer: {
        marginLeft: 'auto',
    },

    price: {
        fontSize: 10,
        color: primaryColor,
        fontFamily: "satoshi-regular",
        backgroundColor: yellowFaint,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginRight: 12,
    },
  food: {
    fontFamily: "satoshi-medium",
    fontSize: 16,
    paddingVertical: 5,
  },
  checkbox: {
    margin: 8,
    borderRadius: 7,
    width: 20,
    height: 20,
    borderColor: grey100,
    borderWidth: 1.5,
  },
  checkMeal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
