import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { Login } from './Login';
import { BrowserRouter } from 'react-router-dom';
import { authService } from '../../../services/api/auth.service';

vi.mock('../../../services/api/auth.service', () => ({
  authService: {
    login: vi.fn(),
  },
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Login Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders login form', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/Enter your phone number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter 4-digit PIN/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
  });

  it('successfully logs in with valid credentials', async () => {
    (authService.login as Mock).mockResolvedValue({
      user: { id: '1', name: 'Test User' },
      token: 'test-token',
    });

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter your phone number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter 4-digit PIN/i), {
      target: { value: '1234' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Sign in/i }));

    await waitFor(() => {
      expect(authService.login).toHaveBeenCalledWith({
        phone: '1234567890',
        pin: '1234',
      });
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  it('shows error message on unauthorized', async () => {
    (authService.login as Mock).mockRejectedValue(new Error('UNAUTHORIZED'));

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter your phone number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter 4-digit PIN/i), {
      target: { value: '1111' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Sign in/i }));

    expect(await screen.findByText(/Invalid phone number or PIN/i)).toBeInTheDocument();
  });

  it('triggers lockout after 3 failed attempts', async () => {
    (authService.login as Mock).mockRejectedValue(new Error('UNAUTHORIZED'));

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const phoneInput = screen.getByPlaceholderText(/Enter your phone number/i);
    const pinInput = screen.getByPlaceholderText(/Enter 4-digit PIN/i);
    const submitBtn = screen.getByRole('button', { name: /Sign in/i });

    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(pinInput, { target: { value: '1111' } });

    // 1st
    fireEvent.click(submitBtn);
    expect(await screen.findByText(/Invalid phone number or PIN/i)).toBeInTheDocument();

    // 2nd
    fireEvent.click(submitBtn);
    await waitFor(() => expect(screen.getAllByText(/Invalid phone number or PIN/i).length).toBeGreaterThan(0));

    // 3rd
    fireEvent.click(submitBtn);
    expect(await screen.findByText(/Too many failed attempts. Locked for 30 seconds./i)).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  });
});
