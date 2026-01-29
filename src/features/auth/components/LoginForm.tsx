import {Stack, Button} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import {FormTextField} from '../../../shared/components/FormTextField/formTextField';
import {useLoginForm} from '../hooks/useLoginForm';
import {Link} from 'react-router-dom';

export const LoginForm = () => {
  const {t} = useTranslation();

  const {
    register,
    onSubmit,
    formState: {errors},
  } = useLoginForm();

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <FormTextField
          label={t('auth.username')}
          placeholder={t('auth.usernamePlaceholder')}
          register={register('username')}
          error={errors.username?.message}
        />

        <FormTextField
          label={t('auth.password')}
          placeholder={t('auth.passwordPlaceholder')}
          type="password"
          register={register('password')}
          error={errors.password?.message}
        />
        <p style={{fontSize: '14px', textAlign: 'center', marginBottom: '1em'}}>
          {t('auth.noAccount')}{' '}
          <Link to="/register" style={{color: '#3182ce'}}>
            {t('auth.createOne')}
          </Link>
        </p>
        <Button type="submit" colorScheme="blue">
          {t('auth.submit_login')}
        </Button>
      </Stack>
    </form>
  );
};
