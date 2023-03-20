import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

test('renders home page', () => {
  render(  <BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Front /i);
  expect(linkElement).toBeInTheDocument();
});
