import React from "react";
import { render, screen } from "@testing-library/react";
import Feedback from "./Feedback";
import { MemoryRouter } from "react-router-dom";

test("form should be empty when loaded", () => {
  render(
    <MemoryRouter>
      <Feedback />
    </MemoryRouter>
  );
  const feedbackInput = screen.getByRole("textbox", { name: "name" });
});
