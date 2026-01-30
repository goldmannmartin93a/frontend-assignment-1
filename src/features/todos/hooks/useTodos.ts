import {useEffect, useState} from 'react';
import {getTodos} from '../services/authApi';
import {useAuth} from '../../auth/AuthContext';
import {toast} from 'react-toastify';

export const useTodos = () => {
  const {accessToken} = useAuth();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    if (!accessToken) return;

    setLoading(true);

    try {
      const res = await getTodos(accessToken);
      setData(res.todos as any[]);
    } catch (error) {
      toast.error(String(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [accessToken]);

  return {
    todos: data,
    loading,
    refetch: fetchTodos,
  };
};
