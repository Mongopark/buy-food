import * as Yup from 'yup';

export type otpVerificationProps = {
  otp: string;
};
export const initialValues: otpVerificationProps = {
  otp: '',
};
export const validationSchema = Yup.object().shape({
  otp: Yup.string().required('Check your email for OTP!'),
});
