import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import {AppRouter} from './routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {i18n, t} = useTranslation();

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${t('app.title')}`}
        defaultTitle={t('app.title')}
        htmlAttributes={{lang: i18n.language}}
      >
        <meta name="description" content={t('app.description')} />
      </Helmet>
      <ToastContainer />
      <AppRouter />
    </>
  );
}

export default App;
