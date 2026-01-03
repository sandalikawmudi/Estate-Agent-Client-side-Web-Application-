import { render, screen } from "@testing-library/react";
import Navbar from "../components/NavBar";
import { BrowserRouter } from "react-router-dom";

test("Navbar shows PROPERTYLINK", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  
  expect(screen.getByText(/PROPERTYLINK/i)).toBeInTheDocument();
});
