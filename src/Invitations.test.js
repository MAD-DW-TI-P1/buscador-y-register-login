import { render, screen, waitFor } from '@testing-library/react';
import Invitations from './Invitations';
import userEvent from '@testing-library/user-event';

test('Invitaciones', () => {
  render(<Invitations />);
  const linkElement = screen.getByText(/Invitaciones/i);
  expect(linkElement).toBeInTheDocument();
});

test('trigger some awesome feature when search', async () => {
  render(<Invitations />)
  const inputElement = screen.getByPlaceholderText('Buscar...');
  await waitFor(() => {
    expect(screen.getByText('Nuevo diseño')).toBeInTheDocument();
  });
  userEvent.type(inputElement, 'f');
  const invitaciones = screen.getAllByText('Ver más');
  expect(inputElement.value).toBe('f');
  expect(invitaciones.length).toBe(5);
});



