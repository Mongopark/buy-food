import {Image, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/header/ScreenHeader';
import MainButton from '../../components/button/MainButton';
import {primaryColor, secondaryColor} from '../../constants/colors';
import {styles} from '../../styles/Message';
import {useNavigation} from '@react-navigation/native';

const EmailVerified = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Image source={require('../../assets/set.png')} />
        <ScreenHeader
          title="Email address verified!
          "
          desc="Your email address has been verified successfully."
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

export default EmailVerified;
