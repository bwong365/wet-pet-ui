import { Button } from '@mantine/core';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Form } from '@components/templates/Form/Form';
import { render } from '@utils/testUtils';
import { FormSelect } from './FormSelect';

describe('FormSelect', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();
    render(
      <Form
        defaultValues={{
          bestLetter: 'a',
        }}
        onSubmit={(val) => mockSubmit(val)}
      >
        <FormSelect
          data={[
            { label: 'The Letter A', value: 'a' },
            { label: 'The Letter B', value: 'b' },
          ]}
          label="Best Letter"
          name="bestLetter"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );

    const select = screen.getByRole('searchbox', { name: 'Best Letter' });
    expect(select).toHaveValue('The Letter A');
    await user.click(select);
    await user.selectOptions(await screen.findByRole('listbox', { name: 'Best Letter' }), 'The Letter B');
    expect(select).toHaveValue('The Letter B');
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({ bestLetter: 'b' }));
  });
});
