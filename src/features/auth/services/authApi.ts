import {API_URL} from '../../../utils/constants';
import {AuthFormValues, LoginResponse} from '../types';

export const login = async (data: AuthFormValues): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result?.error ?? 'Login failed');
  }

  return result;
};

export const getMe = async (accessToken: string) => {
  const res = await fetch(`${API_URL}/api/user/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result?.error ?? 'Unauthorized');
  }

  return result;
};

export const registerUser = async (data: AuthFormValues) => {
  const res = await fetch(`${API_URL}/api/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result?.error ?? 'Registration failed');
  }

  return result;
};
