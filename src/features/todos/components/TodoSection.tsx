import {VStack, Text, Box} from '@chakra-ui/react';
import {TodoItem} from './TodoItem';

type Props = {
  title: string;
  todos: any[];
  completed?: boolean;
  onToggle: (id: string, next: boolean) => void;
  onDelete: (id: string) => void;
  onNavigate: (path: string) => void;
};

const TodoSection = ({title, todos, completed, onToggle, onDelete, onNavigate}: Props) => {
  if (todos.length === 0) return null;

  return (
    <>
      {completed && <Box h="1px" bg="gray.200" my={6} />}

      <Text fontWeight="semibold" mb={3}>
        {title}
      </Text>

      <VStack align="stretch">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completed={completed}
            onToggle={onToggle}
            onDelete={onDelete}
            onClick={() => onNavigate(`/todos/${todo.id}`)}
          />
        ))}
      </VStack>
    </>
  );
};

export default TodoSection;
