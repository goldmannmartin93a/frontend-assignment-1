import {useState} from 'react';
import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  HStack,
  VStack,
  IconButton,
  Text,
} from '@chakra-ui/react';
import {FiArrowLeft} from 'react-icons/fi';
import {useNavigate} from 'react-router-dom';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoListPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const addTodo = () => {
    if (!value.trim()) return;

    setTodos([...todos, {id: Date.now(), text: value, completed: false}]);
    setValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box p={8} bg="white" rounded="md" shadow="md" w="sm">
        <HStack mb={6}>
          <IconButton
            aria-label="Back to login"
            children={<FiArrowLeft />}
            variant="outline"
            onClick={() => navigate('/login')}
          />
          <Heading size="md">Todos</Heading>
        </HStack>

        <HStack mb={4}>
          <Input
            placeholder="Add a new todo..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          />
          <Button colorScheme="teal" onClick={addTodo}>
            Add
          </Button>
        </HStack>
        <VStack align="stretch">
          {todos.length === 0 && (
            <Text color="gray.400" textAlign="center">
              No todos yet
            </Text>
          )}

          {todos.map((todo) => (
            <HStack key={todo.id} p={2} borderWidth="1px" borderRadius="md" justify="space-between">
              {todo.text}
              <IconButton
                aria-label="Delete todo"
                size="sm"
                colorScheme="red"
                variant="ghost"
                onClick={() => deleteTodo(todo.id)}
              />
            </HStack>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default TodoListPage;
