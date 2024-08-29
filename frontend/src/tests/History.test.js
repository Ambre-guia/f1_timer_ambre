import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import History from '../components/History';
import axios from 'axios';

jest.mock('axios');

describe('History Component', () => {
  it('should display the best time', async () => {
    axios.get.mockResolvedValue({ data: { time: 500 } });
    render(<History />);
    await waitFor(() =>
      expect(screen.getByText('Time: 500 ms')).toBeInTheDocument()
    );
  });
});
