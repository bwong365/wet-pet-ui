import { ReactNode } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { DeepPartial, FieldValues, FormProvider, useForm, UseFormReturn } from 'react-hook-form';
import { ZodType } from 'zod';

type Props<T extends FieldValues> = {
  children: ReactNode | ((form: UseFormReturn<T, object>) => ReactNode);
  defaultValues: T;
  onSubmit: (values: T) => void;
  schema?: ZodType<T>;
};

export const Form = <T extends FieldValues>({ children, defaultValues, onSubmit, schema }: Props<T>) => {
  const form = useForm<T>({
    defaultValues: defaultValues as DeepPartial<T>,
    mode: 'onBlur',
    resolver: schema ? zodResolver(schema) : undefined,
  });

  return (
    <FormProvider {...form}>
      <form
        onReset={(e) => {
          e.preventDefault();
          form.reset();
        }}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {typeof children === 'function' ? children(form) : children}
      </form>
    </FormProvider>
  );
};
