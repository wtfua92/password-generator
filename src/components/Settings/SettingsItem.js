import React from "react";
import PropTypes from "prop-types";

function SettingsItem({ value, onChangeHandler, type }) {
  return (
    <div className="password-generator__settings__item">
      <label htmlFor={`setting-item-${type}`}>
        <input
          id={`setting-item-${type}`}
          type="checkbox"
          value={value}
          onChange={() => onChangeHandler(type)}
        />
        <span>use {type}</span>
      </label>
    </div>
  );
}

SettingsItem.defaultProps = {
  value: false,
  onChangeHandler: () => {},
  type: ""
};

SettingsItem.propTypes = {
  value: PropTypes.bool,
  onChangeHandler: PropTypes.func,
  type: PropTypes.string
};

export default SettingsItem;
