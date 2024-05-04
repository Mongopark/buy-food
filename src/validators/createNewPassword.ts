import * as Yup from 'yup';

export type createNewPasswordProps = {
  password: string;
  confirmPassword: string;
};
export const initialValues: createNewPasswordProps = {
  password: '',
  confirmPassword: '',
};
export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain at least one letter, one number, and one special character',
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});
