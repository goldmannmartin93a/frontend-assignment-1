import {useState} from 'react';
import {CreateTodoRequest, updateTodo} from '../services/authApi';
import {useAuth} from '../../auth/AuthContext';
import {toast} from 'react-toastify';
import {useTranslation} from 'react-i18next';

export const useUpdateTodo = () => {
  const {accessToken} = useAuth();
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();

  const update = async (id: string, data: CreateTodoRequest) => {
    if (!accessToken) throw new Error('Not authenticated');

    setLoading(true);
    try {
      return await updateTodo(accessToken, id, data);
    } catch (error) {
      toast.error(String(error));
    } finally {
      toast.success(t('todos.update_success'));
      setLoading(false);
    }
  };

  return {update, loading};
};
