import * as Yup from 'yup';

export type signupProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
};
export const initialValues: signupProps = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: '',
};
export const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{11}$/, 'Invalid phone number')
    .required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain at least one letter, one number, and one special character',
    )
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});
