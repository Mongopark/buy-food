import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/header/ScreenHeader';
import MainButton from '../../components/button/MainButton';
import {backgroundColor, secondaryColor} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const PhoneNoSet = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Image source={require('../../assets/set.png')} />
        <ScreenHeader
          title="New phone number set"
          desc="Your new phone number has been set, you can now proceed to log into your account."
        />
      </View>
      <View style={styles.btn}>
        <MainButton
          title="Okay"
          outline={false}
          onPress={() => navigate('ProfileScreen')}
          bG={secondaryColor}
          color="#fff"
        />
      </View>
    </View>
  );
};

export default PhoneNoSet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: 10,
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    marginLeft: 10,
  },
});
