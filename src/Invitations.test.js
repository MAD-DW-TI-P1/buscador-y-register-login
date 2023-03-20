import { render, screen } from '@testing-library/react';
import Invitations from './Invitations';

test('Invitaciones', () => {
  render(<Invitations />);
  const linkElement = screen.getByText(/Invitaciones/i);
  expect(linkElement).toBeInTheDocument();
});
