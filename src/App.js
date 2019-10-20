import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import "./index.scss";
import PasswordGenerator from "./tools/generator";
import Result from "./components/Result/Result";
import Settings from "./components/Settings/Settings";
import { types } from "./tools/constants";

const App = function() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [settings, setSettings] = useState({
    [types.SYMBOL]: false,
    [types.UPPERCASE]: false,
    [types.INTEGER]: false
  });
  const [passwordLength, setPasswordLength] = useState(8);

  const generatePasswordHandler = () => {
    const passwordGenerator = new PasswordGenerator();
    setCurrentPassword(
      passwordGenerator.generatePassword(passwordLength, settings)
    );
  };

  const changeSettingsHandler = settingToChange => {
    setSettings({ ...settings, [settingToChange]: !settings[settingToChange] });
  };

  const changePasswordLengthHandler = value => {
    setPasswordLength(value);
  };

  return (
    <div className="password-generator">
      <Result currentPassword={currentPassword} />
      <Settings
        passwordLength={passwordLength}
        settings={settings}
        changeSettingsHandler={changeSettingsHandler}
        changePasswordLengthHandler={changePasswordLengthHandler}
      />
      <button
        className="password-generator__action-btn"
        type="button"
        onClick={generatePasswordHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default hot(App);