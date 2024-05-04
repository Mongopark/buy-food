import {Image, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/header/ScreenHeader';
import MainButton from '../../components/button/MainButton';
import {primaryColor, secondaryColor} from '../../constants/colors';
import {styles} from '../../styles/Message';
import {useNavigation} from '@react-navigation/native';

const PasswordSet = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Image source={require('../../assets/set.png')} />
        <ScreenHeader
          title="New password set
          "
          desc="Your new email address has been set, you can now proceed to log into your account."
        />
      </View>
      <View style={styles.btn}>
        <MainButton
          title="Okay"
          outline={false}
          onPress={() => {
            navigate('Login');
          }}
          bG={secondaryColor}
          color={primaryColor}
        />
      </View>
    </View>
  );
};

export default PasswordSet;
