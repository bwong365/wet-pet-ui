import { TextInput, TextInputProps } from '@mantine/core';
import { useController } from 'react-hook-form';

type Props = TextInputProps & {
  name: string;
};

export const FormTextInput = ({ name, ...props }: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return <TextInput {...props} {...field} error={error?.message} />;
};
