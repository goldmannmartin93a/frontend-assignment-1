import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useTodos} from '../hooks/useTodos';
import {useCreateTodo} from '../hooks/useCreateTodo';
import {useDeleteTodo} from '../hooks/useDeleteTodo';
import {useToggleTodoCompletion} from '../hooks/useToggleTodoCompletion';

import TodoSection from '../components/TodoSection';
import TodoListLayout from '../components/TodoListLayout';
import AddTodoInput from '../components/AddTodoInput';
import TodoListHeader from '../components/TodoListHeader';
import {TodoResponse} from '../types';
import {Box, Button, Text} from '@chakra-ui/react';
import {useAuth} from '../../auth/AuthContext';

const TodoListPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {todos, loading, refetch} = useTodos();
  const {create} = useCreateTodo();
  const {remove} = useDeleteTodo();
  const {complete, incomplete} = useToggleTodoCompletion();

  const {logout} = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const addTodo = async () => {
    if (!title.trim()) return;

    await create({
      title,
      description,
    });

    setTitle('');
    setDescription('');
    await refetch();
  };

  const toggleTodo = async (id: string, next: boolean) => {
    next ? await complete(id) : await incomplete(id);
    await refetch();
  };

  const deleteTodo = async (id: string) => {
    await remove(id);
    await refetch();
  };

  const todoList = todos.filter((t: TodoResponse) => !t.completed);
  const completedList = todos.filter((t: TodoResponse) => t.completed);

  return (
    <TodoListLayout>
      <TodoListHeader onAdd={addTodo} />

      <AddTodoInput
        title={title}
        description={description}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onSubmit={addTodo}
      />

      {!loading && todos.length === 0 && (
        <Text color="gray.400" textAlign="center">
          No tasks yet
        </Text>
      )}

      <TodoSection
        title="To-do"
        todos={todoList}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onNavigate={navigate}
      />

      <TodoSection
        title="Completed"
        todos={completedList}
        completed
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onNavigate={navigate}
      />
      <Box position="absolute" bottom={4} right={4}>
        <Button colorScheme="red" variant="outline" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </TodoListLayout>
  );
};

export default TodoListPage;
