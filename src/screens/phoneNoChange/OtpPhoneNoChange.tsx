import {StyleSheet, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import GoBackHeader from '../../components/header/GoBackHeader';
import ScreenHeader from '../../components/header/ScreenHeader';
import MainButton from '../../components/button/MainButton';
import {backgroundColor, secondaryColor} from '../../constants/colors';
import Otp from '../../components/inputs/Otp';
import {useNavigation} from '@react-navigation/native';

const OtpPhoneNoChange = () => {
  const {navigate} = useNavigation<any>();
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
    navigate('PhoneNoSet');
  };
  return (
    <View style={styles.container}>
      <GoBackHeader title="Change phone number" />
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
        <View style={styles.btn}>
          <MainButton
            title="Verify"
            outline={false}
            onPress={onSubmit}
            bG={secondaryColor}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

export default OtpPhoneNoChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },

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
});
