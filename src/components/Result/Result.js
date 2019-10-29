import React from "react";
import PropTypes from "prop-types";

import "./Result.scss";

const Result = ({ currentPassword, savePasswordToClipboard }) => (
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
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAATklEQVRIiWNgGOqAEYn9n4pmwQEThYYSBCxYxLC6hFwwID6AAarEyYD6AAZIjRMUn9PcB6MWjFowagFqTqZqKQoDg6IsoqhUpbkPhj4AABQZBDNxiXEsAAAAAElFTkSuQmCC"
        alt="Copy to clipboard"
      />
    </button>
  </div>
);

Result.defaultProps = {
  currentPassword: "",
  savePasswordToClipboard: () => {}
};

Result.propTypes = {
  currentPassword: PropTypes.string.isRequired,
  savePasswordToClipboard: PropTypes.func.isRequired
};

export default Result;
