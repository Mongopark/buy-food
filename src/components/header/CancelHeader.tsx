import {Text, View} from 'react-native';
import React from 'react';
import {CloseCircle, Call} from 'iconsax-react-native';
import {styles} from '../../styles/GoBackHeader';
import {useNavigation} from '@react-navigation/native';
import {primaryColor} from '../../constants/colors';

type CancelHeaderProps = {
  title: string;
};

const CancelHeader = ({title}: CancelHeaderProps) => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <CloseCircle
        size="24"
        color={primaryColor}
        onPress={() => {
          goBack();
        }}
      />
      <Text style={styles.title}>{title}</Text>

      <Call size="24" color={primaryColor} />
    </View>
  );
};

export default CancelHeader;
