import {StyleSheet, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../components/header/GoBackHeader';
import {primaryColor} from '../../constants/colors';
import AccountInputs from '../../components/inputs/AccountInputs';
import MainButton from '../../components/button/MainButton';
import ScreenHeader from '../../components/header/ScreenHeader';

const PasswordOtpVerify = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader title="Change password" />
      <View style={styles.screenContainer}>
        <ScreenHeader
          title="OTP verification"
          desc="Please enter the one-time password (otp) that was sent to your email address. Code expires in 5 mins."
        />
        <AccountInputs
          label="Email address"
          onChange={() => {}}
          onBlur={() => {}}
          touched={undefined}
          error={undefined}
          value={''}
        />
        <View style={styles.btn}>
          <MainButton
            title="Verify"
            outline={false}
            onPress={() => {}}
            bG={primaryColor}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

export default PasswordOtpVerify;

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    marginLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
