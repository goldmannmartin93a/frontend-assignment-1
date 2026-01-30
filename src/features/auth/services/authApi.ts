import {AuthRequest, LoginResponse} from '../types';

const API_URL = 'http://localhost:3001';

export const login = async (data: AuthRequest): Promise<LoginResponse> => {
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

export const registerUser = async (data: AuthRequest) => {
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
