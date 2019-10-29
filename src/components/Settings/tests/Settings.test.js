import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Settings from "../Settings";

describe("<Settings />", () => {
  const changeSettingsHandlerMock = jest.fn();
  const changePasswordLengthHandlerMock = jest.fn();
  const props = {
    settings: {
      integer: false,
      symbol: false,
      uppercase: false
    },
    passwordLength: 12,
    changeSettingsHandlerMock: changeSettingsHandlerMock,
    changePasswordLengthHandlerMock: changePasswordLengthHandlerMock
  };
  let container;

  beforeEach(() => {
    container = render(<Settings {...props} />);
  });

  afterEach(cleanup);

  it("should include password length section", () => {
    const { getByLabelText } = container;
    const passwordLength = getByLabelText("Length:");
    expect(passwordLength).toBeDefined();
  });

  it("should have as many setting items as there are key:value pairs in settings prop", () => {
    const { getAllByLabelText } = container;
    const settingItems = getAllByLabelText(/^use/);
    expect(settingItems.length).toEqual(Object.keys(props.settings).length);
  });

  it("should match snapshot", () => {
    const {
      container: { firstChild: root }
    } = container;
    expect(root).toMatchSnapshot();
  });
});
