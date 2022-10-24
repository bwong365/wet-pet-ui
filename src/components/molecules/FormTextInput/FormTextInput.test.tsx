import { Button } from '@mantine/core';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Form } from '@components/templates/Form/Form';
import { render } from '@utils/testUtils';
import { FormTextInput } from './FormTextInput';

describe('FormTextInput', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();
    render(
      <Form
        defaultValues={{
          fullName: '',
        }}
        onSubmit={(val) => mockSubmit(val)}
      >
        <FormTextInput label="Full Name" name="fullName" />
        <Button type="submit">Submit</Button>
      </Form>
    );

    const input = screen.getByRole('textbox', { name: 'Full Name' });
    expect(input).toHaveValue('');
    await user.type(input, 'Chuck Norris');
    expect(input).toHaveValue('Chuck Norris');
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({ fullName: 'Chuck Norris' }));
  });
});
