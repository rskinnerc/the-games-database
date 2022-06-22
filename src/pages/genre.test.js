import { screen, render } from "@testing-library/react";
import store from '../redux/configureStore'
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import App from "../App"

describe("The home page functionality", () => {
  it("should load the games for a given genre from the API and list them from Redux store", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/genre/action']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const gamesBreakdownText = await screen.findByText("GAMES BREAKDOWN", { exact: false });
    const votesText = await screen.findAllByText("votes", { exact: false });
    expect(gamesBreakdownText).toBeInTheDocument();
    expect(votesText.length).toBeGreaterThan(0);
  })

  it("should have the heading containing the games count for a given genre", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/genre/action']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const gamesCountText = await screen.findByText("Games Count:", { exact: false });
    expect(gamesCountText).toBeInTheDocument();
  })
});