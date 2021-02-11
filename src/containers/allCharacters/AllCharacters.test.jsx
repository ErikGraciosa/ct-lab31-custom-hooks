import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AllCharacters from './AllCharacters';
import mockApiData from '../../fixtures/mockApiData.json';
import { ThemeProvider } from '../../hooks/toggleThemeContext';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(mockApiData));
  })
);

describe('AllCharacters container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays all characters to home page', () => {
    act(() => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <AllCharacters />
          </MemoryRouter>     
        </ThemeProvider>
      );
    });

    return waitFor(() => {
      screen.getByText('Rick Sanchez');
      screen.getByText('Morty Smith');
      screen.getByText('Summer Smith');
    });
  });
});
