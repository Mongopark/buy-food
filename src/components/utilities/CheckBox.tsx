import { StyleSheet } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { grey100, secondaryColor } from "../../constants/colors";
import { IDishOption, IFoodItem, IFoodPack } from "../../types/restaurant.interface";

interface Props {
  isSelected: boolean
  handleValueChange: () => void;
  selectedItem: any;
  foodItemId: any;
  dishId: string;
}

const CheckBox = ({ isSelected, handleValueChange, selectedItem, foodItemId }: Props) => {
  // console.log("Item ID:", foodItemId);
  // console.log("the selecteditem id in use: ", selectedItem?.item.id);
  // console.log("=============================================================================");

  return (
    <Checkbox
      style={styles.checkbox}
      value={isSelected}
      onValueChange={handleValueChange}
      color={isSelected ? secondaryColor : undefined}
    />
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkbox: {
    // margin: 8,
    borderRadius: 7,
    width: 20,
    height: 20,
    borderColor: grey100,
    borderWidth: 1.5,
  },
});
