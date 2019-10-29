import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Result from "../Result";

describe("<Result />", () => {
  const password = "123";

  afterEach(cleanup);

  it("should display password", () => {
    const { getByDisplayValue } = render(<Result currentPassword={password} />);
    const input = getByDisplayValue(password);
    expect(input).toBeDefined();
    expect(input).toHaveValue(password);
  });

  it("should copy the password in clipboard on button click", () => {
    const savePasswordToClipboardMock = jest.fn();
    const { getByTitle } = render(
      <Result
        currentPassword={password}
        savePasswordToClipboard={savePasswordToClipboardMock}
      />
    );
    const button = getByTitle("Copy to clipboard");
    fireEvent.click(button);
    expect(savePasswordToClipboardMock).toHaveBeenCalledTimes(1);
    expect(savePasswordToClipboardMock).toHaveBeenCalledWith(password);
  });

  it("should match the snapshot", () => {
    const savePasswordToClipboardMock = jest.fn();
    const { getByDisplayValue } = render(
      <Result
        currentPassword={password}
        savePasswordToClipboard={savePasswordToClipboardMock}
      />
    );
    const input = getByDisplayValue(password);
    expect(input).toMatchSnapshot();
  });
});
