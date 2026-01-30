import {VStack, Input} from '@chakra-ui/react';

type Props = {
  title: string;
  description: string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onSubmit: () => void;
};

const AddTodoInput = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onSubmit,
}: Props) => (
  <VStack mb={6}>
    <Input
      placeholder="What needs to be done?"
      value={title}
      onChange={(e) => onTitleChange(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
    />

    <Input
      placeholder="Description"
      value={description}
      onChange={(e) => onDescriptionChange(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
      fontSize="sm"
    />
  </VStack>
);

export default AddTodoInput;
