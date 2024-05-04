import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {ArrowRight2} from 'iconsax-react-native';
import {primaryColor} from '../../constants/colors';
import {styles} from '../../styles/Dropdown';

type DropdownProps = {
  title?: string;
  element: any;
  onPress: (e: any) => any;
};

export default function Dropdown({element, onPress, title}: DropdownProps) {
  return (
    <TouchableOpacity onPress={() => onPress(element)} style={styles.container}>
      <View style={styles.leftSide}>
        <View>{element.icon}</View>
        <Text style={styles.title}>
          {element.title}
          {title}
        </Text>
      </View>
      <View>
        <ArrowRight2 size="24" color={primaryColor} />
      </View>
    </TouchableOpacity>
  );
}
