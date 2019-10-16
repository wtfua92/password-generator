import React from 'react';
import PropTypes from 'prop-types';

function Result({currentPassword}) {
    return (
        <div className="password-generator__result">
            <label htmlFor="password">Your Secure Password: </label>
            <input id="password" type="text" value={currentPassword} disabled />
        </div>
    );
}

Result.propTypes = {
    currentPassword: PropTypes.string
};

export default Result;