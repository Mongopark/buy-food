import {StyleSheet, View} from 'react-native';
import React from 'react';
import {gray50, secondaryColor} from '../../constants/colors';

interface ProgressBarProps {
  steps: number;
  currentStep: number;
}

const ProgressBar = ({steps, currentStep}: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      {Array.from({length: steps}).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index === currentStep
              ? {backgroundColor: secondaryColor}
              : {backgroundColor: gray50},
          ]}
        />
      ))}
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  step: {
    width: 60.6,
    height: 3,
    marginHorizontal: 4,
    borderRadius: 4,
  },
});
