import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterCard from './CharacterCard';
import { ThemeProvider } from '../../hooks/toggleThemeContext';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterCard component', () => {
  afterEach(() => cleanup());
  it('renders CharacterCard', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <MemoryRouter>
          <CharacterCard />
        </MemoryRouter>     
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
