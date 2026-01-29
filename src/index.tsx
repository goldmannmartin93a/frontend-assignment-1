import {ChakraProvider} from '@chakra-ui/react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import GlobalStyles from './GlobalStyles';
import WebVitals from './WebVitals';
import './i18n/i18n';
import theme from './theme';
import {BrowserRouter} from 'react-router-dom';
import App from './App/App';
import {AuthProvider} from './features/auth/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider value={theme}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <GlobalStyles />
          <WebVitals showStatusInConsoleLog />
        </HelmetProvider>
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);
