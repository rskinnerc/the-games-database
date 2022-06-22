import { screen, waitFor, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import store from '../redux/configureStore';
import { server } from '../mocks/server';

describe('The home page functionality', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should load the genres from the API and list them from Redux store', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    const genreLinks = await screen.findAllByText('Games Count:', { exact: false });
    expect(genreLinks.length).toBeGreaterThan(0);
  });

  it('should allow the user to filter the loaded genres', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    const genreLinks = await screen.findAllByText('Games Count:', { exact: false });
    expect(genreLinks.length).toBeGreaterThan(0);

    const filterInput = await screen.findByPlaceholderText('Filter by genre');
    userEvent.type(filterInput, 'This long string should not bring any result filtering by genre name.');

    const filteredLinks = await waitFor(() => screen.queryAllByText('Games Count:', { exact: false }));
    expect(filteredLinks.length).toBe(0);
  });

  it('should navigate to the genre details page when clicking a genre card', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    const genreLinks = await screen.findAllByText('Games Count:', { exact: false });
    userEvent.click(genreLinks[0]);

    const gamesBreakdownText = await screen.findByText('GAMES BREAKDOWN', { exact: false });
    const votesText = await screen.findAllByText('votes', { exact: false });
    expect(gamesBreakdownText).toBeInTheDocument();
    expect(votesText.length).toBeGreaterThan(0);
  });
});
