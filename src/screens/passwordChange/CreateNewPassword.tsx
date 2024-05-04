import {StyleSheet, View} from 'react-native';
import React from 'react';

import GoBackHeader from '../../components/header/GoBackHeader';
import {primaryColor} from '../../constants/colors';
import AccountInputs from '../../components/inputs/AccountInputs';
import MainButton from '../../components/button/MainButton';
import ScreenHeader from '../../components/header/ScreenHeader';
import {EyeSlash} from 'iconsax-react-native';

const CreateNewPassword = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader title="Change password" />
      <View style={styles.screenContainer}>
        <ScreenHeader
          title="Create new password"
          desc="Enter a unique password that will be used to log into your account."
        />
        <AccountInputs
          label="Password"
          placeholder="at least 8 characters"
          icon={true}
          variant={<EyeSlash size="12" color={primaryColor} />}
          onChange={() => {}}
          onBlur={() => {}}
          touched={undefined}
          error={undefined}
          value={''}
        />

        <AccountInputs
          label="Confirm password"
          placeholder="at least 8 characters"
          icon={true}
          variant={<EyeSlash size="12" color={primaryColor} />}
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

export default CreateNewPassword;

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
