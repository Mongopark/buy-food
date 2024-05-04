import * as Yup from 'yup';

export type loginProps = {
  phoneOrEmail: string;
  password: string;
};
export const initialValues: loginProps = {
  phoneOrEmail: '',
  password: '',
};
export const validationSchema = Yup.object().shape({
  phoneOrEmail: Yup.string().required('Username/Phone is required'),
  password: Yup.string().required('Password is required'),
});
