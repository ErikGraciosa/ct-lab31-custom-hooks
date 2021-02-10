import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailsCard from './DetailsCard';

describe('DetailsCard component', () => {
  afterEach(() => cleanup());
  it('renders DetailsCard', () => {
    const { asFragment } = render(<DetailsCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
