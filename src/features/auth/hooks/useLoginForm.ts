import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../AuthContext';
import {AuthFormValues, authSchema} from '../schema';

export const useLoginForm = () => {
  const {login} = useAuth();
  const navigate = useNavigate();

  const form = useForm<AuthFormValues>({
    resolver: yupResolver(authSchema),
    mode: 'onSubmit',
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await login(data);
      navigate('/todos');
    } catch (e) {
      form.setError('root', {
        message: 'Invalid username or password',
      });
    }
  });

  return {
    register: form.register,
    formState: form.formState,
    onSubmit,
  };
};
