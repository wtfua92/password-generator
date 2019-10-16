import React, {useState} from 'react';
import './index.scss';
import PasswordGenerator from './tools/generator';
import Result from './components/Result';
import Settings from './components/Settings';

const App = function () {
    const [currentPassword, setCurrentPassword] = useState('');
    const [settings, setSettings] = useState({
        passwordLength: 8,
        number: false,
        uppercase: false,
        symbol: false
    });

    const generatePasswordHandler = (e) => {
        e.preventDefault();
        const passwordGenerator = new PasswordGenerator(settings);
        setCurrentPassword(passwordGenerator.generateSecurePassword());
    };

    const changeSettingsHandler = (settingToChange) => {
        setSettings({...settings, [settingToChange]: !settings[settingToChange]});
    };

    const changePasswordLengthHandler = (value) => {
        setSettings({...settings, passwordLength: value});
    };

    return (
        <div className="password-generator">
            <Result currentPassword={currentPassword} />
            <Settings settings={settings} changeSettingsHandler={changeSettingsHandler} changePasswordLengthHandler={changePasswordLengthHandler} />
            <button className="password-generator__action-btn" type="button" onClick={generatePasswordHandler}>Generate</button>
        </div>
    );
};

export default App;