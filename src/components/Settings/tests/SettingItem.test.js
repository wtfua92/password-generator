import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SettingsItem from "../SettingsItem";
import { types } from "../../../tools/constants";

describe("<PasswordLength />", function() {
  const onChangeHandlerMock = jest.fn();
  const props = {
    value: false,
    type: types.INTEGER,
    onChangeHandler: onChangeHandlerMock
  };

  let container;

  beforeEach(() => {
    container = render(<SettingsItem {...props} />);
  });

  afterEach(cleanup);

  it("should render successfully if all necessary props are provided", () => {
    const { getByText, getByLabelText } = container;
    const spanElement = getByText(`use ${props.type}`);
    const inputElement = getByLabelText(`use ${props.type}`);
    expect(spanElement).toBeDefined();
    expect(inputElement).toBeDefined();
    expect(inputElement.value).toBe(props.value.toString());
  });

  it("should call onChangeHandler on click", () => {
    const { getByLabelText } = container;
    const inputElement = getByLabelText(`use ${props.type}`);
    fireEvent.click(inputElement, { target: { value: true } });
    expect(onChangeHandlerMock).toHaveBeenCalledWith(props.type);
  });

  it("should match snapshot", () => {
    const {
      container: { firstChild: root }
    } = container;
    expect(root).toMatchSnapshot();
  });
});
