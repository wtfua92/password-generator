import React from "react";
import PropTypes from "prop-types";

import "./Settings.scss";

import { types } from "../../tools/constants";
import SettingsItem from "./SettingsItem";

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
        <label htmlFor="passwordLengthNumber">Length: </label>
        <input
          id="passwordLength"
          type="range"
          min={8}
          max={16}
          value={passwordLength}
          onChange={({ target }) => {
            changePasswordLengthHandler(parseInt(target.value));
          }}
        />
        <input
          id="passwordLengthNumber"
          type="number"
          min={8}
          max={16}
          value={passwordLength}
          onChange={({ target }) => {
            changePasswordLengthHandler(parseInt(target.value));
          }}
        />
      </div>
      <SettingsItem
        value={settings[types.INTEGER]}
        onChangeHandler={() => {
          changeSettingsHandler(types.INTEGER);
        }}
        type={types.INTEGER}
      />
      <SettingsItem
        value={settings[types.UPPERCASE]}
        onChangeHandler={() => {
          changeSettingsHandler(types.UPPERCASE);
        }}
        type={types.UPPERCASE}
      />
      <SettingsItem
        value={settings[types.SYMBOL]}
        onChangeHandler={() => {
          changeSettingsHandler(types.SYMBOL);
        }}
        type={types.SYMBOL}
      />
    </div>
  );
}

export default Settings;
