import {Flex, Box, Heading, Text, Button} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../auth/AuthContext';
import {formatLocalDate} from '../helpers';

type Props = {
  onAdd: () => void;
  disabled?: boolean;
};

const TodoListHeader = ({onAdd, disabled}: Props) => {
  const {t} = useTranslation();
  const {user} = useAuth();

  return (
    <Flex justify="space-between" align="center" mb={8}>
      <Box>
        <Heading size="lg">{t('todos.title', {user: user?.username})}</Heading>
        <Text color="gray.500" fontSize="sm">
          {formatLocalDate(new Date())}
        </Text>
      </Box>

      <Button colorScheme="blue" size="sm" onClick={onAdd} disabled={disabled}>
        {t('todos.add_todo')}
      </Button>
    </Flex>
  );
};

export default TodoListHeader;
