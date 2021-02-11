import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Paging from './Paging';
import { ThemeProvider } from '../../hooks/toggleThemeContext';
import { MemoryRouter } from 'react-router-dom';

describe('Paging component', () => {
  afterEach(() => cleanup());
  it('renders Paging', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <MemoryRouter>
          <Paging />
        </MemoryRouter>     
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
