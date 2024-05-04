import * as Yup from 'yup';

export type forgotPasswordProps = {
  emailForgotPassword: string;
};
export const initialValues: forgotPasswordProps = {
  emailForgotPassword: '',
};
export const validationSchema = Yup.object().shape({
  emailForgotPassword: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
});
