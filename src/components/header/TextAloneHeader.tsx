import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../styles/ProfileScreen.styles';

const TextAloneHeader = ({title}: {title: string}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TextAloneHeader;
