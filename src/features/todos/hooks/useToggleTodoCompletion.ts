import {useState} from 'react';
import {markTodoAsComplete, markTodoAsIncomplete} from '../services/authApi';
import {useAuth} from '../../auth/AuthContext';
import {toast} from 'react-toastify';

export const useToggleTodoCompletion = () => {
  const {accessToken} = useAuth();
  const [loading, setLoading] = useState(false);

  const complete = async (id: string) => {
    if (!accessToken) throw new Error('Not authenticated');

    setLoading(true);
    try {
      await markTodoAsComplete(accessToken, id);
    } finally {
      setLoading(false);
    }
  };

  const incomplete = async (id: string) => {
    if (!accessToken) throw new Error('Not authenticated');

    setLoading(true);
    try {
      await markTodoAsIncomplete(accessToken, id);
    } catch (error) {
      toast.error(String(error));
    } finally {
      setLoading(false);
    }
  };

  return {complete, incomplete, loading};
};
