import {VStack, Input, Textarea} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';

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
}: Props) => {
  const {t} = useTranslation();

  return (
    <VStack mb={6}>
      <Input
        placeholder={t('todos.todo_placeholder')}
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
      />

      <Textarea
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
        placeholder={t('todos.todo_description_placeholder')}
        rows={6}
      />
    </VStack>
  );
};

export default AddTodoInput;
