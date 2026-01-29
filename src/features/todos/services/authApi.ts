const API_URL = 'http://localhost:3001';

type AuthRequest = {
  username: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export const login = async (data: AuthRequest): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error ?? 'Login failed');
  }

  return res.json();
};

export const getMe = async (accessToken: string) => {
  const res = await fetch(`${API_URL}/api/user/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error('Unauthorized');
  }

  return res.json();
};

export const registerUser = async (data: AuthRequest) => {
  const res = await fetch(`${API_URL}/api/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Registration failed');
  }

  return res.json();
};
