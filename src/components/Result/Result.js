import React from "react";
import PropTypes from "prop-types";

import "./Result.scss";

function Result({ currentPassword }) {
  const savePasswordToClipboard = password => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="password-generator__result">
      <label htmlFor="password">Your Secure Password: </label>
      <input
        className={currentPassword ? "with-password" : ""}
        id="password"
        type="text"
        value={currentPassword}
        disabled
      />
      <button
        type="button"
        onClick={() => {
          savePasswordToClipboard(currentPassword);
        }}
        title="Copy to clipboard"
      >
        <img
          alt="Copy password"
          src="https://img.icons8.com/material-rounded/24/000000/copy.png"
        />
      </button>
    </div>
  );
}

Result.propTypes = {
  currentPassword: PropTypes.string
};

export default Result;
