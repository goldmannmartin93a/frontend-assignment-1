import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerUser} from '../../todos/services/authApi';
import {AuthFormValues, authSchema} from '../schema';

export const useRegistrationForm = () => {
  const navigate = useNavigate();

  const form = useForm<AuthFormValues>({
    resolver: yupResolver(authSchema),
    mode: 'onSubmit',
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await registerUser(data);
      navigate('/login');
    } catch (e) {
      form.setError('root', {
        message: 'Registration failed',
      });
    }
  });

  return {
    register: form.register,
    formState: form.formState,
    onSubmit,
  };
};
