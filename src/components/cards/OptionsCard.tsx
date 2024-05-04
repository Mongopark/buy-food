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
import { IDishOption, IFoodItem, IFoodPack } from "../../types/restaurant.interface";
import { useCustomerStore } from "../../store";

interface SelectedItem {
  dishOpt: IDishOption;
  item: IFoodItem;
  dishId: string;
}

interface Props {
  dishOption: IDishOption;
  dishId: string;
}

// function isDishOption(obj: any): obj is IDishOption  {
//   return 'foodItems' in obj
// }
const DishesCard = ({ dishOption, dishId }: Props) => {

  const [selectedItem, setSelected] = useState<SelectedItem | null>(null);
  const { updateDishOption, customerDishes, dishUpdated } = useCustomerStore((state) => ({
    updateDishOption: state.updateDishOption,
    customerDishes: state.customerDishes,
    dishUpdated: state.dishUpdated,
  }));

  useEffect(() => {
    let existingDishes = customerDishes.filter(dish => dish.id === dishId);

    if (existingDishes.length > 0) {
      const dishOfConcern = existingDishes[existingDishes.length - 1];
      if (dishOfConcern.dishOptions.length > 0) {
        let dishOptOfConcern = dishOfConcern.dishOptions.filter((opt) => opt.id === dishOption.id)

        if (dishOptOfConcern.length > 0) {
          let selectedItem = dishOptOfConcern[0].foodItems[0];
          setSelected({ dishOpt: dishOptOfConcern[0], item: selectedItem, dishId });
        } else {
          setSelected(null);
        }

        // console.log("i ran... optionscard", customerDishes);

        // console.log("selected item: ", selectedItem);
        // console.log("the item in the dish options...", dishOfConcern.dishOptions[0].foodItems.find(item => item.id === selectedItem.id));
      } else {
        setSelected(null);
      }
    } else {
      setSelected(null);
    }
  }, [dishId, dishUpdated]);

  function handleCheckBoxPress(dishOpt: IDishOption, item: IFoodItem) {
    // if (selectedItem === null) {
    //   updateFoodItemsInDishOptions(item, dishId, dishOpt, 'add');
    // } else {
    //   updateFoodItemsInDishOptions(selectedItem.item, dishId, selectedItem.dishOpt, 'remove');
      
    // }

    console.log("=============================")
    // console.log("the dish option: ", dishOpt.foodItems);
    
    setSelected((prevState) => {
      if (prevState === null) {
        updateDishOption({ ...dishOpt, price: item.price, foodItems: [item] }, dishId, 'add');
        return {
          dishOpt,
          item,
          dishId
        }
      }

      updateDishOption(dishOpt, dishId, 'remove');
      updateDishOption({ ...dishOpt, price: item.price, foodItems: [item] }, dishId, 'add');
      return {
        dishOpt,
        item,
        dishId,
      }
    });

    console.log(" ")
    // console.log("calling time.............................")
    // console.log(" ");
    // console.log("price: ", item.price);
    updateDishOption({...dishOpt, price: item.price, foodItems: [ item ]}, dishId, 'add');

    console.log("the new customer dishes...", customerDishes);
  }

  return (
    <View>
        <View key={dishOption.id} style={styles.dishes}>
           <Text style={styles.title}>Select your { dishOption.name }</Text>
          <View style={styles.instruction}>
            <Text style={styles.choose}>Choose at least 2 item</Text>
            { dishOption.isRequired ? <Text style={styles.required}>Required</Text> : null }
           </View>
           {dishOption.foodItems.length > 0 ? (
             <>
               {dishOption.foodItems.map((foodItm) => (
                 <View key={foodItm.id} style={styles.checkMeal}>
                   <Text style={styles.food}>{foodItm.name}</Text>
                   <View style={ styles.priceContainer }>
                     <Text style={styles.price}>{ '₦' + foodItm.price }</Text>
                   </View>
                   <CheckBox
                     isSelected={selectedItem?.item.id === foodItm.id && selectedItem.dishId === dishId}
                     foodItemId={foodItm.id}
                     dishId={dishOption.name}
                     selectedItem={selectedItem}
                     handleValueChange={selectedItem?.item.id !== foodItm.id ? () => handleCheckBoxPress(dishOption, foodItm) : () => undefined} />
                 </View>
                ))}
             </>
           ): (
             null
           )}
        </View> 
    </View>
  );
};

export default DishesCard;

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
  required: {
    fontSize: 14,
    color: primaryColor,
    fontFamily: "satoshi-regular",
    backgroundColor: yellowFaint,
    paddingVertical: 6,
    paddingHorizontal: 12,
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
