import {useState} from 'react';
import {CreateTodoRequest, updateTodo} from '../services/todoApi';
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
      const result = await updateTodo(accessToken, id, data);
      toast.success(t('todos.update_success'));
      return result;
    } catch (error) {
      toast.error(String(error));
    } finally {
      setLoading(false);
    }
  };

  return {update, loading};
};
