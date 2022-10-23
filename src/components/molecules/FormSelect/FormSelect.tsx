import { Select, SelectProps } from '@mantine/core';
import { useController } from 'react-hook-form';

type Props = SelectProps & {
  name: string;
};

export const FormSelect = ({ name, ...props }: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return <Select {...field} {...props} error={error?.message} />;
};
