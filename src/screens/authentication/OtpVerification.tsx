import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../../styles/OtpEmail';
import ScreenHeader from '../../components/header/ScreenHeader';
import GoBackHeader from '../../components/header/GoBackHeader';

import MainButton from '../../components/button/MainButton';
import {primaryColor, secondaryColor} from '../../constants/colors';

import {useNavigation} from '@react-navigation/native';
import Otp from '../../components/inputs/Otp';

const OtpVerification = () => {
  const {navigate} = useNavigation<any>();
  const otpRecived = true;
  const [otp, setOtp] = useState<string>('');

  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);

  const handleOtpChange = (index: number, text: string) => {
    if (text.length <= 1) {
      setOtp((prevOtp: string) => {
        const updatedOtp = prevOtp.split('');
        updatedOtp[index] = text;
        return updatedOtp.join('');
      });

      // Move focus to the next input field
      if (text.length === 1 && index < 3) {
        switch (index) {
          case 0:
            inputRef2.current?.focus();
            break;
          case 1:
            inputRef3.current?.focus();
            break;
          case 2:
            inputRef4.current?.focus();
            break;
        }
      }
    }
  };

  const onSubmit = () => {
    navigate('CreateNewPassword');
  };
  return (
    <View style={styles.container}>
      <GoBackHeader title="Forgot password" />
      <View style={styles.screenContainer}>
        <ScreenHeader
          title="OTP verification"
          desc="Please enter the 4 digit code sent to your
              email address."
        />
        <Otp
          otp={otp}
          handleOtpChange={handleOtpChange}
          inputRef1={inputRef1}
          inputRef2={inputRef2}
          inputRef3={inputRef3}
          inputRef4={inputRef4}
        />
        <View>
          <Text style={otpStyles.message}>
            {otpRecived ? (
              'Resend code in 00:44'
            ) : (
              <View>
                No code received?{' '}
                <Text style={otpStyles.resendTxt}>Resend it</Text>
              </View>
            )}
          </Text>
        </View>

        <View style={styles.btn}>
          <MainButton
            title="Verify"
            outline={false}
            onPress={onSubmit}
            bG={secondaryColor}
            color={primaryColor}
          />
        </View>
      </View>
    </View>
  );
};

export default OtpVerification;

const otpStyles = StyleSheet.create({
  message: {
    textAlign: 'center',
  },
  resendTxt: {
    fontWeight: 'bold',
  },
});
