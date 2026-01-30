import * as yup from 'yup';
import i18n from '../../i18n/i18n';

export const authSchema = yup.object({
  username: yup.string().required(i18n.t('auth.usernameRequired')),
  password: yup.string().required(i18n.t('auth.passwordRequired')),
});
