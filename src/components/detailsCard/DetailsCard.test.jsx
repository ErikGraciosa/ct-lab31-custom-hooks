import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailsCard from './DetailsCard';
import { ThemeProvider } from '../../hooks/toggleThemeContext';
import { MemoryRouter } from 'react-router-dom';

describe('DetailsCard component', () => {
  afterEach(() => cleanup());
  it('renders DetailsCard', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <MemoryRouter>
          <DetailsCard />
        </MemoryRouter>     
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
