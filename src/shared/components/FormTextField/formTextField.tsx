import {Input, Stack} from '@chakra-ui/react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {FormErrorText} from '../FormErrorText/FormErrorText';

type FormTextFieldProps = {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  type?: string;
};

export const FormTextField = ({
  label,
  placeholder,
  register,
  error,
  type = 'text',
}: FormTextFieldProps) => (
  <Stack gap={1} mb={4}>
    <span>{label}</span>

    <Input type={type} placeholder={placeholder} {...register} />

    <FormErrorText message={error} />
  </Stack>
);
