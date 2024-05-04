import {View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../styles/OtpEmail';
import ScreenHeader from '../../components/header/ScreenHeader';
import AccountInputs from '../../components/inputs/AccountInputs';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {primaryColor, secondaryColor} from '../../constants/colors';
import {Formik} from 'formik';
import MainButton from '../../components/button/MainButton';
import {
  createNewPasswordProps,
  initialValues,
  validationSchema,
} from '../../validators/createNewPassword';
import {useNavigation} from '@react-navigation/native';
import GoBackHeader from '../../components/header/GoBackHeader';

const CreateNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {navigate} = useNavigation<any>();
  const onSubmit = (values: createNewPasswordProps) => {
    console.log({forgotPassword: values});

    navigate('PasswordSet');
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({handleChange, handleSubmit, handleBlur, touched, values, errors}) => (
        <View style={styles.container}>
          <GoBackHeader title="Forgot password" />
          <View style={styles.screenContainer}>
            <ScreenHeader
              title="Create new password"
              desc="Enter a unique password that will be used to log into your account."
            />
            <AccountInputs
              label="Password"
              placeholder="Enter your password"
              icon={true}
              isPassword={true}
              variant={
                showPassword ? (
                  <EyeSlash size="16" color={primaryColor} />
                ) : (
                  <Eye size="16" color={primaryColor} />
                )
              }
              showPassword={showPassword}
              toggleIcon={togglePasswordVisibility}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
              touched={touched.password}
              value={values.password}
              error={errors.password}
            />
            <AccountInputs
              label="Confirm Password"
              placeholder="Enter your password"
              icon={true}
              isPassword={true}
              variant={
                showPassword ? (
                  <EyeSlash size="16" color={primaryColor} />
                ) : (
                  <Eye size="16" color={primaryColor} />
                )
              }
              showPassword={showPassword}
              toggleIcon={togglePasswordVisibility}
              onChange={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              touched={touched.confirmPassword}
              value={values.confirmPassword}
              error={errors.confirmPassword}
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

export default CreateNewPassword;
