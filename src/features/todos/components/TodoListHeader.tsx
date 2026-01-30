import {Flex, Box, Heading, Text, Button} from '@chakra-ui/react';

type Props = {
  onAdd: () => void;
};

const TodoListHeader = ({onAdd}: Props) => (
  <Flex justify="space-between" align="center" mb={8}>
    <Box>
      <Heading size="lg">Hello 👋</Heading>
      <Text color="gray.500" fontSize="sm">
        {new Date().toLocaleDateString()}
      </Text>
    </Box>

    <Button colorScheme="blue" size="sm" onClick={onAdd}>
      Add task
    </Button>
  </Flex>
);

export default TodoListHeader;
