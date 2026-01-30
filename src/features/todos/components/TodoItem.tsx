import {HStack, VStack, Text, IconButton, Checkbox} from '@chakra-ui/react';
import {FiTrash2} from 'react-icons/fi';
import {TodoResponse} from '../types';

type Props = {
  todo: TodoResponse;
  completed?: boolean;
  onToggle: (id: string, next: boolean) => void;
  onDelete: (id: string) => void;
  onClick: () => void;
};

export const TodoItem = ({todo, completed, onToggle, onDelete, onClick}: Props) => {
  const createdAt = new Date(todo.createdAt).toLocaleDateString();

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
          {/* Title */}
          <Text
            cursor="pointer"
            fontWeight="medium"
            as={completed ? 's' : undefined}
            color={completed ? 'gray.500' : 'gray.800'}
            onClick={onClick}
          >
            {todo.title}
          </Text>

          {/* Description */}
          {todo.description && (
            <Text fontSize="sm" color="gray.500">
              {todo.description}
            </Text>
          )}

          {/* Date */}
          <Text fontSize="xs" color="gray.400">
            Created {createdAt}
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
