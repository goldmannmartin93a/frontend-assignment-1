import {Flex, Box, Heading, IconButton, HStack} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {RegistrationForm} from '../components/registrationForm';
import {FiArrowLeft} from 'react-icons/fi';
import {useTranslation} from 'react-i18next';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Box p={8} bg="white" rounded="md" shadow="md" w="sm">
        <HStack mb={6}>
          <IconButton
            aria-label="Back to login"
            children={<FiArrowLeft />}
            variant="ghost"
            onClick={() => navigate('/login')}
          />
          <Heading size="md">{t('auth.registration')}</Heading>
        </HStack>

        <RegistrationForm />
      </Box>
    </Flex>
  );
};

export default RegistrationPage;
