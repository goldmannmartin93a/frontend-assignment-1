import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup';
import {authSchema} from '../schema';
import {registerUser} from '../services/authApi';
import {toast} from 'react-toastify';
import {useTranslation} from 'react-i18next';
import {AuthFormValues} from '../types';

export const useRegistrationForm = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const form = useForm<AuthFormValues>({
    resolver: yupResolver(authSchema),
    mode: 'onSubmit',
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await registerUser(data);
      navigate('/login');
    } catch (error) {
      toast.error(String(error));
    } finally {
      toast.success(t('auth.registration_success'));
    }
  });

  return {
    register: form.register,
    formState: form.formState,
    onSubmit,
  };
};
