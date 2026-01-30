import {useParams, useNavigate} from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
  Textarea,
  Checkbox,
  HStack,
} from '@chakra-ui/react';
import {useEffect, useState} from 'react';

import {useTodoDetail} from '../hooks/useTodoDetail';
import {useUpdateTodo} from '../hooks/useUpdateTodo';
import {useDeleteTodo} from '../hooks/useDeleteTodo';
import {useToggleTodoCompletion} from '../hooks/useToggleTodoCompletion';
import {useTranslation} from 'react-i18next';

const TodoDetailPage = () => {
  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const {todo, loading} = useTodoDetail(id!);
  const {update} = useUpdateTodo();
  const {remove} = useDeleteTodo();
  const {complete, incomplete} = useToggleTodoCompletion();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description ?? '');
      setCompleted(todo.completed);
    }
  }, [todo]);

  if (loading) {
    return (
      <Flex justify="center" py={20}>
        <Spinner />
      </Flex>
    );
  }

  if (!todo) return;

  const save = async () => {
    await update(todo.id, {title, description});
  };

  const toggleComplete = async () => {
    const next = !completed;
    setCompleted(next);

    try {
      if (next) {
        await complete(todo.id);
      } else {
        await incomplete(todo.id);
      }
    } catch {
      setCompleted(!next);
    }
  };

  const deleteTodo = async () => {
    await remove(todo.id);
    navigate('/todos');
  };

  return (
    <Flex justify="center" py={10} bg="gray.50" minH="100vh">
      <Box bg="white" w="full" maxW="3xl" p={8} rounded="xl" shadow="sm">
        <Stack>
          <Heading size="lg">{t('todos.titleDetail')}</Heading>

          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />

          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={6}
          />

          <Checkbox.Root
            checked={completed}
            onCheckedChange={toggleComplete}
            display="flex"
            alignItems="center"
            gap={3}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Label>
              <Text>{todo.completed ? t('todos.completed') : t('todos.mark_complete')}</Text>
            </Checkbox.Label>
          </Checkbox.Root>

          <HStack justify="space-between" pt={4}>
            <Button variant="ghost" onClick={() => navigate('/todos')}>
              {t('todos.back_to_list')}
            </Button>

            <HStack>
              <Button colorScheme="red" variant="outline" onClick={deleteTodo}>
                {t('todos.delete')}
              </Button>

              <Button colorScheme="blue" onClick={save}>
                {t('todos.save')}
              </Button>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default TodoDetailPage;
