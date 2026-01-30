import {createContext, useContext, useEffect, useState, ReactNode, JSX} from 'react';
import {login as loginApi, getMe} from './services/authApi';
import {AuthContextType, User} from './types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    localStorage.getItem('accessToken')
  );

  const login = async (data: {username: string; password: string}) => {
    const {accessToken, refreshToken} = await loginApi(data);

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    setAccessToken(accessToken);

    const me = await getMe(accessToken);
    setUser(me);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    setAccessToken(null);
    setUser(null);
  };

  useEffect(() => {
    if (!accessToken) return;

    getMe(accessToken).then(setUser).catch(logout);
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth not in AuthProvider');
  }

  return context;
};
