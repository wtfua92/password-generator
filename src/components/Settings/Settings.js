import React from "react";
import PropTypes from "prop-types";
import { types } from "../../tools/constants";

Settings.propTypes = {
  settings: PropTypes.shape({
    passwordLength: PropTypes.number,
    number: PropTypes.bool,
    upperCase: PropTypes.bool,
    symbol: PropTypes.bool
  }),
  changeSettingsHandler: PropTypes.func,
  changePasswordLengthHandler: PropTypes.func
};

function Settings({
  settings: { passwordLength, number, upperCase, symbol },
  changeSettingsHandler,
  changePasswordLengthHandler
}) {
  return (
    <div className="password-generator__settings">
      <div className="password-generator__settings__length">
        <label htmlFor="passwordLength">Length: </label>
        <input
          id="passwordLength"
          type="number"
          value={passwordLength}
          onChange={({ target }) => {
            changePasswordLengthHandler(parseInt(target.value));
          }}
        />
      </div>
      <div className="password-generator__settings__item">
        <label htmlFor="useNumber">
          <input
            id="useNumber"
            type="checkbox"
            value={number}
            onChange={() => {
              changeSettingsHandler(types.NUMBER.toLowerCase());
            }}
          />
          <span>use number</span>
        </label>
      </div>
      <div className="password-generator__settings__item">
        <label htmlFor="useUpperCase">
          <input
            id="useUpperCase"
            type="checkbox"
            value={upperCase}
            onChange={() => {
              changeSettingsHandler(types.UPPERCASE.toLowerCase());
            }}
          />
          <span>use uppercase</span>
        </label>
      </div>
      <div className="password-generator__settings__item">
        <label htmlFor="useSymbol">
          <input
            id="useSymbol"
            type="checkbox"
            value={symbol}
            onChange={() => {
              changeSettingsHandler(types.SYMBOL.toLowerCase());
            }}
          />
          <span>use special symbols</span>
        </label>
      </div>
    </div>
  );
}

export default Settings;
