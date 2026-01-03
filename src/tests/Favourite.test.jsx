import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FavouritesProvider from "/src/context/FavouritesContext.jsx";
import SearchPage from "/src/pages/SearchPage.jsx";

test("Favourites section renders", () => {
  render(
    <MemoryRouter>
      <FavouritesProvider>
        <SearchPage />
      </FavouritesProvider>
    </MemoryRouter>
  );

  expect(screen.getByText(/Favourites/i)).toBeInTheDocument();
});
