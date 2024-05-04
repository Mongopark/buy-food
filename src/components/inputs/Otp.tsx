import {View, TextInput} from 'react-native';
import React from 'react';
import {otpStyles} from '../../styles/EmailSignupVerification';

type OtpProps = {
  otp: string;
  handleOtpChange: (index: number, text: string) => void;
  inputRef1: React.RefObject<TextInput>;
  inputRef2: React.RefObject<TextInput>;
  inputRef3: React.RefObject<TextInput>;
  inputRef4: React.RefObject<TextInput>;
};

const Otp = ({
  otp,
  handleOtpChange,
  inputRef1,
  inputRef2,
  inputRef3,
  inputRef4,
}: OtpProps) => {
  return (
    <View style={otpStyles.otpContainer}>
      <TextInput
        ref={inputRef1}
        style={otpStyles.otpInput}
        onChangeText={text => handleOtpChange(0, text)}
        value={otp[0] || ''}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={inputRef2}
        style={otpStyles.otpInput}
        onChangeText={text => handleOtpChange(1, text)}
        value={otp[1] || ''}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={inputRef3}
        style={otpStyles.otpInput}
        onChangeText={text => handleOtpChange(2, text)}
        value={otp[2] || ''}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={inputRef4}
        style={otpStyles.otpInput}
        onChangeText={text => handleOtpChange(3, text)}
        value={otp[3] || ''}
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
};

export default Otp;
