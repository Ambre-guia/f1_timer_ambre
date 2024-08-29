import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDashboard from '../pages/UserDashboard';
import axios from 'axios';

jest.mock('axios');

describe('User Dashboard Page', () => {
  it('should render user information', async () => {
    axios.get.mockResolvedValue({ data: { email: 'test@example.com' } });
    render(<UserDashboard />);
    await waitFor(() =>
      expect(screen.getByText('Email: test@example.com')).toBeInTheDocument()
    );
  });
});
