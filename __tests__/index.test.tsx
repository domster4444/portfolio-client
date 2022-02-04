import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { UserProvider } from '@auth0/nextjs-auth0';

describe('Home', () => {
  it('renders a heading', () => {
    expect(2 + 2).toBe(4);
  });
});
