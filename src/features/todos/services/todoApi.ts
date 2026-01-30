import {API_URL} from '../../../utils/constants';
import {TodoResponse} from '../types';

export type CreateTodoRequest = {
  title: string;
  description: string;
};

export type TodoListResponse = {
  todos: TodoResponse[];
};

const authHeaders = (accessToken: string) => ({
  Authorization: `Bearer ${accessToken}`,
});

const parseResponse = async (res: Response) => {
  const text = await res.text();

  if (!text || !text.trim()) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error('Invalid JSON response from server');
  }
};

export const getTodos = async (accessToken: string): Promise<TodoListResponse> => {
  const res = await fetch(`${API_URL}/api/todo/list`, {
    headers: authHeaders(accessToken),
  });

  const result = await parseResponse(res);

  if (!res.ok) {
    throw new Error(result?.error ?? 'Failed to fetch todos');
  }

  return result as TodoListResponse;
};

export const getTodoDetail = async (
  accessToken: string,
  id: string
): Promise<TodoResponse> => {
  const res = await fetch(`${API_URL}/api/todo/${id}`, {
    headers: authHeaders(accessToken),
  });

  const result = await parseResponse(res);

  if (!res.ok) {
    throw new Error(result?.error ?? 'Failed to fetch todo');
  }

  return result as TodoResponse;
};

export const createTodo = async (accessToken: string, data: CreateTodoRequest) => {
  const res = await fetch(`${API_URL}/api/todo`, {
    method: 'POST',
    headers: {
      ...authHeaders(accessToken),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await parseResponse(res);

  if (!res.ok) {
    throw new Error(result?.error ?? 'Failed to create todo');
  }

  return result;
};

export const updateTodo = async (accessToken: string, id: string, data: CreateTodoRequest) => {
  const res = await fetch(`${API_URL}/api/todo/${id}`, {
    method: 'PUT',
    headers: {
      ...authHeaders(accessToken),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Failed to update todo');
  }
};

export const deleteTodo = async (accessToken: string, id: string) => {
  const res = await fetch(`${API_URL}/api/todo/${id}`, {
    method: 'DELETE',
    headers: authHeaders(accessToken),
  });

  const result = await parseResponse(res);

  if (!res.ok) {
    throw new Error(result?.error ?? 'Failed to delete todo');
  }

  return result;
};

export const markTodoAsComplete = async (accessToken: string, id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/api/todo/${id}/complete`, {
    method: 'POST',
    headers: authHeaders(accessToken),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Failed to complete todo');
  }
};

export const markTodoAsIncomplete = async (accessToken: string, id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/api/todo/${id}/incomplete`, {
    method: 'POST',
    headers: authHeaders(accessToken),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Failed to mark todo incomplete');
  }
};
