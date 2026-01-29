import {Text} from '@chakra-ui/react';

type FormErrorTextProps = {
  message?: string;
};

export const FormErrorText = ({message}: FormErrorTextProps) => {
  if (!message) return null;

  return (
    <Text color="red.500" fontSize="sm" mt={1}>
      {message}
    </Text>
  );
};
