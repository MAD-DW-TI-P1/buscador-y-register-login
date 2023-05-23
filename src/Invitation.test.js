import { render, screen } from '@testing-library/react';
import Invitation from './Invitation';

test('Invitación', () => {
  render(<Invitation />);
  const linkElement = screen.getByText(/Ver más/i);
  expect(linkElement).toBeInTheDocument();
});
