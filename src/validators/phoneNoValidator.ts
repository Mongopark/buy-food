import * as Yup from 'yup';

export type PasswordProps = {
  phoneNo: string;
};
export const initialValues: PasswordProps = {
  phoneNo: '',
};
export const validationSchema = Yup.object().shape({
  phoneNo: Yup.string()
    .matches(/^\d{11}$/, 'Invalid phone number')
    .required('Phone number is required'),
});
