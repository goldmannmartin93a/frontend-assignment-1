import {Flex, Box} from '@chakra-ui/react';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const TodoListLayout = ({children}: Props) => (
  <Flex minH="100vh" bg="gray.50" justify="center" py={10}>
    <Box bg="white" w="full" maxW="4xl" p={8} rounded="xl" shadow="sm">
      {children}
    </Box>
  </Flex>
);

export default TodoListLayout;
