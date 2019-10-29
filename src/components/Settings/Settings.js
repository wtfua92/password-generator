import React from "react";
import PropTypes from "prop-types";

import "./Settings.scss";

import SettingsItem from "./SettingsItem";
import PasswordLength from "./PasswordLength";

function Settings({
  settings,
  passwordLength,
  changeSettingsHandler,
  changePasswordLengthHandler
}) {
  return (
    <div className="password-generator__settings">
      <PasswordLength
        passwordLength={passwordLength}
        changePasswordLengthHandler={changePasswordLengthHandler}
      />
      {Object.keys(settings).map(type => (
        <SettingsItem
          value={settings[type]}
          key={type}
          onChangeHandler={() => changeSettingsHandler(type)}
          type={type}
        />
      ))}
    </div>
  );
}

Settings.propTypes = {
  passwordLength: PropTypes.number.isRequired,
  settings: PropTypes.object.isRequired,
  changeSettingsHandler: PropTypes.func.isRequired,
  changePasswordLengthHandler: PropTypes.func.isRequired
};

Settings.defaultProps = {
  settings: {},
  passwordLength: 8,
  changeSettingsHandler: () => {},
  changePasswordLengthHandler: () => {}
};

export default Settings;
