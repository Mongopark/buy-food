import * as Yup from 'yup';

export type ChangePasswordProps = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};
export const initialValues: ChangePasswordProps = {
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};
export const validationSchema = Yup.object({
  currentPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  newPassword: Yup.string()
    .min(8, 'New password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain at least one letter, one number, and one special character',
    )
    .required('New password is required'),
  confirmNewPassword: Yup.string()
    .required('Confirm new password is required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});
