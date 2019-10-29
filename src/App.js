import { hot } from "react-hot-loader/root";
import React, { useEffect, useState } from "react";
import "./index.scss";
import PasswordGenerator from "./tools/generator";
import Result from "./components/Result/Result";
import Settings from "./components/Settings/Settings";
import { types } from "./tools/constants";

const App = function() {
  const passwordGenerator = new PasswordGenerator();
  const [currentPassword, setCurrentPassword] = useState("");
  const [settings, setSettings] = useState({
    [types.INTEGER]: false,
    [types.UPPERCASE]: false,
    [types.SYMBOL]: false
  });
  const [passwordLength, setPasswordLength] = useState(8);

  const generatePasswordHandler = () => {
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

  const savePasswordToClipboard = password => {
    navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePasswordHandler();
  }, [settings, passwordLength]);

  return (
    <div className="password-generator">
      <Result
        currentPassword={currentPassword}
        savePasswordToClipboard={savePasswordToClipboard}
      />
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
