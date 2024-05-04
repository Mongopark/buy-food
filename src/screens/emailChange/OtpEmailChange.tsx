import {View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../components/header/GoBackHeader';
import ScreenHeader from '../../components/header/ScreenHeader';
import AccountInputs from '../../components/inputs/AccountInputs';
import MainButton from '../../components/button/MainButton';
import {primaryColor} from '../../constants/colors';
import {styles} from '../../styles/OtpEmail';

const OtpEmailChange = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader title="Change email address" />
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
          isPassword={false}
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

export default OtpEmailChange;
