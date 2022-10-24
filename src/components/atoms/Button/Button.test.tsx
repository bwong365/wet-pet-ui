import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { render } from '@utils/testUtils';
import { Button } from './Button';

describe('Button', () => {
  it('renders', async () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick}>Test</Button>);
    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /test/i });
    await user.click(button);
    expect(mockClick).toHaveBeenCalled();
  });
});
