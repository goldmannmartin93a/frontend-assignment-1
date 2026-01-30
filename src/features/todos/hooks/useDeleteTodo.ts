import {useState} from 'react';
import {deleteTodo} from '../services/authApi';
import {useAuth} from '../../auth/AuthContext';
import {toast} from 'react-toastify';
import {useTranslation} from 'react-i18next';

export const useDeleteTodo = () => {
  const {accessToken} = useAuth();
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();

  const remove = async (id: string) => {
    if (!accessToken) throw new Error('Not authenticated');

    setLoading(true);
    try {
      await deleteTodo(accessToken, id);
    } catch (error) {
      toast.error(String(error));
    } finally {
      toast.success(t('todos.delete_success'));
      setLoading(false);
    }
  };

  return {remove, loading};
};
