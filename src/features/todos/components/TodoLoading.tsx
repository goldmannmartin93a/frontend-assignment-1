import {HStack, Spinner} from '@chakra-ui/react';

const TodoLoading = () => (
  <HStack justify="center" py={10}>
    <Spinner />
  </HStack>
);

export default TodoLoading;
