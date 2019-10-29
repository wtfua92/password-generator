import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PasswordLength from "../PasswordLength";

describe("<PasswordLength />", function() {
  const changePasswordLengthHandlerMock = jest.fn();
  const props = {
    passwordLength: 12,
    changePasswordLengthHandler: changePasswordLengthHandlerMock
  };

  let container;

  beforeEach(() => {
    container = render(<PasswordLength {...props} />);
    changePasswordLengthHandlerMock.mockReset();
  });

  afterEach(cleanup);

  it("should display both range and number inputs", () => {
    const { getAllByDisplayValue } = container;
    const inputs = getAllByDisplayValue(props.passwordLength.toString());
    expect(inputs.length).toEqual(2);
  });

  it("should call changePasswordLengthHandler on change event of input[type='number']", () => {
    const { getAllByDisplayValue } = container;
    const input = getAllByDisplayValue(props.passwordLength.toString()).find(
      i => i.type === "number"
    );
    fireEvent.change(input, { target: { value: 13 } });
    expect(changePasswordLengthHandlerMock).toHaveBeenCalledTimes(1);
    expect(changePasswordLengthHandlerMock).toHaveBeenCalledWith(13);
  });

  it("should call changePasswordLengthHandler on change event of input[type='range']", () => {
    const { getAllByDisplayValue } = container;
    const input = getAllByDisplayValue(props.passwordLength.toString()).find(
      i => i.type === "range"
    );
    fireEvent.change(input, { target: { value: 13 } });
    expect(changePasswordLengthHandlerMock).toHaveBeenCalledTimes(1);
    expect(changePasswordLengthHandlerMock).toHaveBeenCalledWith(13);
  });

  it("should match snapshot", () => {
    const {
      container: { firstChild: root }
    } = container;
    expect(root).toMatchSnapshot();
  });
});
