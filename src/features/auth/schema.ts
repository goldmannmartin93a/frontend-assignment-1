import * as yup from 'yup';

export const authSchema = yup.object({
  username: yup.string().required('Username required'),
  password: yup.string().required('Password required'),
});

export type AuthFormValues = {
  username: string;
  password: string;
};
