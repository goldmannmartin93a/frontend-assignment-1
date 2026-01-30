export type AuthFormValues = {
  username: string;
  password: string;
};

export type User = {
  id: string;
  username: string;
  createdAt: string;
};

export type AuthContextType = {
  user: User | null;
  accessToken: string | null;
  login: (data: {username: string; password: string}) => Promise<void>;
  logout: () => void;
};

export type AuthRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
