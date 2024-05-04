import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {primaryColor} from '../../constants/colors';
import MainButton from '../../components/button/MainButton';
import ScreenHeader from '../../components/header/ScreenHeader';

const PasswordSet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Image source={require('../../assets/set.png')} />
        <ScreenHeader
          title="New password set"
          desc="Your new password has been set, you can now proceed to log into your account."
        />
      </View>
      <View style={styles.btn}>
        <MainButton
          title="Okay"
          outline={false}
          onPress={() => {}}
          bG={primaryColor}
          color="#fff"
        />
      </View>
    </View>
  );
};

export default PasswordSet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
