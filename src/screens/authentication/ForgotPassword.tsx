import {View} from 'react-native';
import React from 'react';
import {styles} from '../../styles/OtpEmail';
import GoBackHeader from '../../components/header/GoBackHeader';
import ScreenHeader from '../../components/header/ScreenHeader';
import AccountInputs from '../../components/inputs/AccountInputs';
import MainButton from '../../components/button/MainButton';
import {primaryColor, secondaryColor} from '../../constants/colors';
import {
  forgotPasswordProps,
  validationSchema,
  initialValues,
} from '../../validators/forgetPassword';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const {navigate} = useNavigation<any>();
  const onSubmit = (values: forgotPasswordProps) => {
    console.log({forgotPassword: values});

    navigate('OtpVerification');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({handleBlur, handleChange, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <GoBackHeader title="Forgot password" />
          <View style={styles.screenContainer}>
            <ScreenHeader
              title="Enter email address"
              desc="Please provide us with the email address linked to your account"
            />

            <AccountInputs
              label="Email address"
              onChange={handleChange('emailForgotPassword')}
              onBlur={handleBlur('emailForgotPassword')}
              touched={touched.emailForgotPassword}
              error={errors.emailForgotPassword}
              value={values.emailForgotPassword}
              placeholder="eg: johndoe@gmail.com"
              isPassword={false}
            />
            <View style={styles.btn}>
              <MainButton
                title="Continue"
                outline={false}
                onPress={handleSubmit}
                bG={secondaryColor}
                color={primaryColor}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};
export default ForgotPassword;
