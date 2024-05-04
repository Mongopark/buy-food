import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {gray100, primaryColor} from '../../constants/colors';

type MainTextInputProps = {
  placeholder?: string;
};
const MainTextInput = ({placeholder}: MainTextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={() => {}}
      autoComplete="email"
      placeholder={placeholder}
    />
  );
};

export default MainTextInput;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: gray100,
    borderRadius: 8,
    fontSize: 14,
    color: primaryColor,
  },
});
