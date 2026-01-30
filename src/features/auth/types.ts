export type AuthFormValues = {
  username: string;
  password: string;
};

export type AuthRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
