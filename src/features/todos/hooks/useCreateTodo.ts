import {createTodo, CreateTodoRequest} from '../services/todoApi';
import {useState} from 'react';
import {useAuth} from '../../auth/AuthContext';
import {toast} from 'react-toastify';
import {useTranslation} from 'react-i18next';

export const useCreateTodo = () => {
  const {accessToken} = useAuth();
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();

  const create = async (data: CreateTodoRequest) => {
    if (!accessToken) {
      throw new Error('No access token');
    }
    setLoading(true);

    try {
      await createTodo(accessToken, data);
      toast.success(t('todos.create_success'));
    } catch (error) {
      toast.error(String(error));
    } finally {
      setLoading(false);
    }
  };

  return {create, loading};
};
