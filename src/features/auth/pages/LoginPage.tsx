import {Flex, Box, Heading} from '@chakra-ui/react';
import {LoginForm} from '../components/LoginForm';
import {useTranslation} from 'react-i18next';

export const LoginPage = () => {
  const {t} = useTranslation();
  return (
    <Flex minH="100vh" align="center" justify="center">
      <Box p={8} bg="white" rounded="md" shadow="md" w="sm">
        <Heading mb={6}>{t('auth.login')}</Heading>
        <LoginForm />
      </Box>
    </Flex>
  );
};
