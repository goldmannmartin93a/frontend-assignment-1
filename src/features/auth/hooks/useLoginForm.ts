import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../AuthContext';
import {authSchema} from '../schema';
import {toast} from 'react-toastify';
import {AuthFormValues} from '../types';
import {useTranslation} from 'react-i18next';

export const useLoginForm = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const form = useForm<AuthFormValues>({
    resolver: yupResolver(authSchema),
    mode: 'onSubmit',
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await login(data);
      navigate('/todos');
      toast.success(t('auth.login_success'));
    } catch (error) {
      toast.error(String(error));
    }
  });

  return {
    register: form.register,
    formState: form.formState,
    onSubmit,
  };
};
