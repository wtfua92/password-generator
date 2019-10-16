import React from 'react';
import PropTypes from 'prop-types';
import {types} from '../tools/constants';

Settings.propTypes = {
    settings: PropTypes.shape({
        passwordLength: PropTypes.number,
        number: PropTypes.bool,
        upperCase: PropTypes.bool,
        symbol: PropTypes.bool,
    }),
    changeSettingsHandler: PropTypes.func,
    changePasswordLengthHandler: PropTypes.func
};

function Settings({
    settings: {
        passwordLength,
        number,
        upperCase,
        symbol,
    },
    changeSettingsHandler,
    changePasswordLengthHandler
}) {
    return (
        <div className="password-generator__settings">
            <div>
                <label htmlFor="passwordLength">Length: </label>
                <input
                    id='passwordLength'
                    type="number"
                    value={passwordLength}
                    onChange={({target}) => {changePasswordLengthHandler(parseInt(target.value));}}
                />
            </div>
            <div>
                <label htmlFor="useNumber">
                    <input id="useNumber" type="checkbox" value={number} onChange={() => { changeSettingsHandler(types.NUMBER.toLowerCase()); }}/>
                    use number
                </label>
            </div>
            <div>
                <label htmlFor="useUpperCase">
                    <input id="useUpperCase" type="checkbox" value={upperCase} onChange={() => { changeSettingsHandler(types.UPPERCASE.toLowerCase()); } }/>
                    use uppercase
                </label>
            </div>
            <div>
                <label htmlFor="useSymbol">
                    <input id="useSymbol" type="checkbox" value={symbol} onChange={() => { changeSettingsHandler(types.SYMBOL.toLowerCase()); }}/>
                    use special symbols
                </label>
            </div>
        </div>
    );
}

export default Settings;