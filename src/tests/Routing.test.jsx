import { render } from "@testing-library/react";
import App from "../App";
import { expect, test } from "vitest";

test("App renders without crashing", () => {
  render(<App />);
  expect(true).toBe(true);
});
