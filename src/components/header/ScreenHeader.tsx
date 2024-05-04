import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../styles/ScreenHeader';

type ScreenHeaderProps = {
  title: string;
  desc: string;
};
const ScreenHeader = ({title, desc}: ScreenHeaderProps) => {
  return (
    <View style={styles.screenHeader}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default ScreenHeader;
