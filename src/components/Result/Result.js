import React from "react";
import PropTypes from "prop-types";

import "./Result.scss";

function Result({ currentPassword }) {
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
    </div>
  );
}

Result.propTypes = {
  currentPassword: PropTypes.string
};

export default Result;
