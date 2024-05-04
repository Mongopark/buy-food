import {View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../components/header/GoBackHeader';
import AccountInputs from '../../components/inputs/AccountInputs';
import MainButton from '../../components/button/MainButton';
import {secondaryColor, textColor} from '../../constants/colors';
import {styles} from '../../styles/AddNewScreen';

const AddCardScreen = () => {
  return (
    <View style={styles.container}>
      <GoBackHeader title="Add new card" />
      <View style={styles.screenContainer}>
        <AccountInputs
          label="Name on card"
          placeholder="eg: Paul Doe"
          onChange={() => {}}
          onBlur={() => {}}
          touched={undefined}
          error={undefined}
          value={''}
          isPassword={false}
        />
        <AccountInputs
          label="Card number"
          placeholder="eg: 0000 0000 0000 0000"
          onChange={() => {}}
          onBlur={() => {}}
          touched={undefined}
          error={undefined}
          value={''}
          isPassword={false}
        />
        <View style={styles.detailsColumn}>
          <View style={styles.half}>
            <AccountInputs
              label="Expiry date"
              placeholder="MM/YY"
              onChange={() => {}}
              onBlur={() => {}}
              touched={undefined}
              error={undefined}
              value={''}
              isPassword={false}
            />
          </View>
          <View style={styles.half}>
            <AccountInputs
              label="CVV"
              placeholder="eg: 123"
              onChange={() => {}}
              onBlur={() => {}}
              touched={undefined}
              error={undefined}
              value={''}
              isPassword={false}
            />
          </View>
        </View>
      </View>

      <View style={styles.btn}>
        <MainButton
          title="Verify"
          outline={false}
          onPress={() => {}}
          bG={secondaryColor}
          color={textColor}
        />
      </View>
    </View>
  );
};

export default AddCardScreen;
