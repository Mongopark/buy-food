import {StyleSheet, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../components/header/GoBackHeader';
import {primaryColor} from '../../constants/colors';
import AccountInputs from '../../components/inputs/AccountInputs';
import MainButton from '../../components/button/MainButton';
import ScreenHeader from '../../components/header/ScreenHeader';

const ChangeEmailScreen = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader title="Change email address" />
      <View style={styles.screenContainer}>
        <ScreenHeader
          title="Enter new email address"
          desc="
        Please provide us with a new email address so we can verify it"
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
            title="Continue"
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

export default ChangeEmailScreen;

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
