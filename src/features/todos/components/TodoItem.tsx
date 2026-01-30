import {HStack, VStack, Text, IconButton, Checkbox} from '@chakra-ui/react';
import {FiTrash2} from 'react-icons/fi';
import {TodoResponse} from '../types';
import {formatLocalDate} from '../helpers';
import {useTranslation} from 'react-i18next';

type Props = {
  todo: TodoResponse;
  completed?: boolean;
  onToggle: (id: string, next: boolean) => void;
  onDelete: (id: string) => void;
  onClick: () => void;
};

export const TodoItem = ({todo, completed, onToggle, onDelete, onClick}: Props) => {
  const {t} = useTranslation();

  return (
    <HStack
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      justify="space-between"
      align="flex-start"
      bg={completed ? 'gray.50' : 'white'}
    >
      <HStack align="flex-start" gap={3}>
        <Checkbox.Root
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id, !todo.completed)}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
        </Checkbox.Root>

        <VStack align="start">
          <Text
            cursor="pointer"
            fontWeight="medium"
            as={completed ? 's' : undefined}
            color={completed ? 'gray.500' : 'gray.800'}
            onClick={onClick}
          >
            {todo.title}
          </Text>

          {todo.description && (
            <Text fontSize="sm" color="gray.500">
              {todo.description}
            </Text>
          )}

          <Text fontSize="xs" color="gray.400">
            {t('todos.created_at', {date: formatLocalDate(todo.createdAt)})}
          </Text>
        </VStack>
      </HStack>

      <IconButton
        aria-label="Delete todo"
        size="sm"
        variant="ghost"
        colorScheme="red"
        onClick={() => onDelete(todo.id)}
      >
        <FiTrash2 />
      </IconButton>
    </HStack>
  );
};
