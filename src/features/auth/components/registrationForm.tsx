import {Stack, Button} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import {FormTextField} from '../../../shared/components/FormTextField/formTextField';
import {useRegistrationForm} from '../hooks/useRegistrationForm';

export const RegistrationForm = () => {
  const {t} = useTranslation();

  const {
    register,
    onSubmit,
    formState: {errors},
  } = useRegistrationForm();
  console.log(errors);
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
        <Button type="submit" colorScheme="blue">
          {t('auth.submit_registration')}
        </Button>
      </Stack>
    </form>
  );
};
