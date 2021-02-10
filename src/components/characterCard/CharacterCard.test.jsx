import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterCard from './CharacterCard';

describe('CharacterCard component', () => {
  afterEach(() => cleanup());
  it('renders CharacterCard', () => {
    const { asFragment } = render(<CharacterCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
