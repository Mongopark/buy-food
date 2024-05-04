import {StyleSheet, View} from 'react-native';
import React, { useEffect } from 'react';

import {Call, Lock} from 'iconsax-react-native';
import {backgroundColor, primaryColor} from '../../constants/colors';
import Dropdown from '../../components/dropdown/Dropdown';
import GoBackHeader from '../../components/header/GoBackHeader';
import AccountInputs from '../../components/inputs/AccountInputs';
import {useNavigation} from '@react-navigation/native';
import { useCustomerStore } from '../../store';

const accountDetails = [
  {
    icon: <Call size="24" color={primaryColor} />,
    title: 'Change phone number',
    index: 1,
  },
  {
    icon: <Lock size="24" color={primaryColor} />,
    title: 'Change password',
    index: 2,
  },
];

const EditProfileScreen = () => {
  const { navigate } = useNavigation<any>();
  const { customer } = useCustomerStore();

  const handleDropdownEvent = (e: any) => {
    switch (e.index) {
      case 1:
        navigate('PhoneChange');
        break;
      case 2:
        navigate('PasswordChange');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <GoBackHeader title="Profile" />
      <View style={styles.screenContainer}>
        <AccountInputs
          label="FullName"
          onChange={() => {}}
          onBlur={() => {}}
          touched={undefined}
          error={undefined}
          value={customer.firstName + '' + customer.lastName}
          isPassword={false}
          isEditable={false}
        />
        {accountDetails.map((item, index) => (
          <View key={index}>
            <Dropdown element={item} onPress={e => handleDropdownEvent(e)} />
            <View style={styles.line} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  screenContainer: {
    paddingHorizontal: 16,
  },
  line: {
    backgroundColor: '#F4F4F6',
    height: 2,
    width: '100%',
    marginVertical: 5,
  },
});
