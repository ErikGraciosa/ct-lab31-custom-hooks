import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Details from './Details';

describe('One character details container', () => {
  it('fetches and displays the details for one character', () => {
    render(<Details match={{ params: { id: '1' } }}/>);
    
    return waitFor(() => {
      screen.getByText('Rick Sanchez');
    });
  });
});