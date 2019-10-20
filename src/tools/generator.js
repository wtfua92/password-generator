import { types } from "./constants";

class PasswordGenerator {
  constructor() {
    this.alphabeticValues = "abcdefghijklmnopqrstuvwxyz";
    this[types.UPPERCASE] = this.alphabeticValues.toUpperCase();
    this[types.INTEGER] = "0123456789";
    this[types.SYMBOL] = "!@#$%^&*()";
  }

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomValue(values) {
    return values[this.getRandomNumber(0, values.length - 1)];
  }

  passwordGeneratorValues(valueType) {
    return this.alphabeticValues + this[valueType];
  }

  passwordMeetsRequirements(password, settings = {}) {
    let validPassword = [];
    for (let setting in settings) {
      if (settings[setting]) {
        const regex = new RegExp(`[${this[setting]}]`);
        validPassword.push(password.search(regex) >= 0);
      }
    }
    return !validPassword.includes(false);
  }

  generatePassword(passwordLength = 8, passwordSettings = {}) {
    let password = "";
    let values = this.alphabeticValues;

    for (let setting in passwordSettings) {
      if (passwordSettings[setting]) {
        values += this.passwordGeneratorValues(setting);
      }
    }

    for (let i = 0; i < passwordLength; i++) {
      password += this.getRandomValue(values);
    }

    if (!this.passwordMeetsRequirements(password, passwordSettings)) {
      password = this.generatePassword(passwordLength, passwordSettings);
    }

    return password;
  }
}

export default PasswordGenerator;
