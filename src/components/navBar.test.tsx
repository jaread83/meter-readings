import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './NavBar';
import { store } from '../app/store';
import { loginSuccess } from '../features/auth/authSlice';

describe('Navbar', () => {
  beforeEach(() => {
    // Ensure we start each test with a clean state
    store.dispatch({
      type: 'auth/logoutSuccess',
    });
  });

  it('renders the navbar with Home link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it('shows meter readings and new meter reading links when authenticated', () => {
    // Simulate a successful login
    store.dispatch(
      loginSuccess({
        accountId: '123',
        userName: 'testuser',
        firstName: 'Test',
        lastName: 'User',
      })
    );

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Meter Readings/i)).toBeInTheDocument();
    expect(screen.getByText(/New Meter Reading/i)).toBeInTheDocument();
  });
});