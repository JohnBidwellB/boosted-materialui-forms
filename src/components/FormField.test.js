import { render, getAllByText } from "@testing-library/react";
import React from "react";
import FormField from "components/FormField";

describe("FormField", () => {
  test("should display label", () => {
    const { container } = render(<FormField label="Test label" />);
    getAllByText(container, "Test label");
  });
});
