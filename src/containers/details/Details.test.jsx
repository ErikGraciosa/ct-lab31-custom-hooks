import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Details from './Details';
import mockApiData from '../../fixtures/mockApiData.json';
import { ThemeProvider } from '../../hooks/toggleThemeContext';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(mockApiData));
  })
);

describe('One character details container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays the details for one character', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Details match={{ params: { id: '1' } }}/>
        </MemoryRouter>     
      </ThemeProvider>
    );
    return waitFor(() => {
      screen.getByText('Rick Sanchez');
    });
  });
});
