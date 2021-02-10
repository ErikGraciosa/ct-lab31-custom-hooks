import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllCharacters from './AllCharacters';

describe('AllCharacters container', () => {
  it('fetches and displays all characters to home page', () => {
    render(<AllCharacters />);

    return waitFor(() => {
      screen.getByText('Rick Sanchez');
      screen.getByText('Morty Smith');
      screen.getByText('Summer Smith');
    });
  });
});
