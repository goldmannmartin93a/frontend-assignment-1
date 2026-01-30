import {useEffect, useState} from 'react';
import {getTodos} from '../services/todoApi';
import {useAuth} from '../../auth/AuthContext';
import {toast} from 'react-toastify';
import {TodoResponse} from '../types';

export const useTodos = () => {
  const {accessToken} = useAuth();
  const [data, setData] = useState<TodoResponse[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    if (!accessToken) return;

    setLoading(true);

    try {
      const res = await getTodos(accessToken);
      setData(res.todos);
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
