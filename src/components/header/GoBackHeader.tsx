import {Text, View} from 'react-native';
import React from 'react';
import {ArrowLeft2} from 'iconsax-react-native';
import {primaryColor} from '../../constants/colors';
import {styles} from '../../styles/GoBackHeader';
import {useNavigation} from '@react-navigation/native';

type GoBackHeaderProps = {
  title: string;
};

const GoBackHeader = ({title}: GoBackHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <ArrowLeft2
        size="24"
        color={primaryColor}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
};

export default GoBackHeader;
