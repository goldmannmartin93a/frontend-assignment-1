import {useEffect, useState} from 'react';
import {getTodoDetail} from '../services/authApi';
import {useAuth} from '../../auth/AuthContext';
import {toast} from 'react-toastify';

export const useTodoDetail = (id: string) => {
  const {accessToken} = useAuth();
  const [todo, setTodo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id || !accessToken) return;

    const fetchTodo = async () => {
      setLoading(true);
      try {
        const res = await getTodoDetail(accessToken, id);
        setTodo(res);
      } catch (error) {
        toast.error(String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id, accessToken]);

  return {todo, loading};
};
