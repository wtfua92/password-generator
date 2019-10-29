import React from "react";
import PropTypes from "prop-types";

function PasswordLength({ passwordLength, changePasswordLengthHandler }) {
  return (
    <div className="password-generator__settings__length">
      <label htmlFor="passwordLengthNumber">Length: </label>
      <input
        id="passwordLength"
        type="range"
        min={8}
        max={16}
        value={passwordLength}
        onChange={({ target }) =>
          changePasswordLengthHandler(parseInt(target.value))
        }
      />
      <input
        id="passwordLengthNumber"
        type="number"
        min={8}
        max={16}
        value={passwordLength}
        onChange={({ target }) =>
          changePasswordLengthHandler(parseInt(target.value))
        }
      />
    </div>
  );
}

PasswordLength.propTypes = {
  passwordLength: PropTypes.number.isRequired,
  changePasswordLengthHandler: PropTypes.func.isRequired
};

PasswordLength.defaultProps = {
  passwordLength: 8,
  changePasswordLengthHandler: () => {}
};

export default PasswordLength;
