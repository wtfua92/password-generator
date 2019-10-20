import React from "react";
import PropTypes from "prop-types";
import { types } from "../../tools/constants";

Settings.propTypes = {
  passwordLength: PropTypes.number,
  settings: PropTypes.shape({
    [types.UPPERCASE]: PropTypes.bool,
    [types.INTEGER]: PropTypes.bool,
    [types.SYMBOL]: PropTypes.bool
  }),
  changeSettingsHandler: PropTypes.func,
  changePasswordLengthHandler: PropTypes.func
};

function Settings({
  settings,
  passwordLength,
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
            value={settings[types.INTEGER]}
            onChange={() => {
              changeSettingsHandler(types.INTEGER);
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
            value={settings[types.UPPERCASE]}
            onChange={() => {
              changeSettingsHandler(types.UPPERCASE);
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
            value={settings[types.SYMBOL]}
            onChange={() => {
              changeSettingsHandler(types.SYMBOL);
            }}
          />
          <span>use special symbols</span>
        </label>
      </div>
    </div>
  );
}

export default Settings;
