import { charRange, numRange, symbols, types, regExps } from "./constants";

class PasswordGenerator {
  constructor({
    passwordLength = 8,
    number = false,
    symbol = false,
    uppercase = false
  }) {
    this.passwordLength = passwordLength;
    this.useNumber = number;
    this.useSymbol = symbol;
    this.useUpperCase = uppercase;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateRandomChar() {
    return String.fromCharCode(this.getRandom(...charRange));
  }

  generateRandomInt() {
    return this.getRandom(...numRange).toString();
  }

  generateRandomSymbol() {
    return String.fromCharCode(symbols[this.getRandom(0, symbols.length)]);
  }

  generateRandomString() {
    let result = "";
    for (let i = 0; i < this.passwordLength; i++) {
      result += this.generateRandomChar();
    }
    return result.toLowerCase();
  }

  canBeChanged(char) {
    return (
      !regExps[types.UPPERCASE].test(char) &&
      !regExps[types.NUMBER].test(char) &&
      !regExps[types.SYMBOL].test(char)
    );
  }

  substituteChar(string, index, type) {
    let newString = string;
    switch (type) {
      case types.NUMBER:
        if (this.canBeChanged(newString[index])) {
          newString =
            newString.substr(0, index) +
            this.generateRandomInt() +
            newString.substr(index + 1);
        }
        return newString;
      case types.SYMBOL:
        if (this.canBeChanged(newString[index])) {
          newString =
            newString.substr(0, index) +
            this.generateRandomSymbol() +
            newString.substr(index + 1);
        }
        return newString;
      case types.UPPERCASE:
        if (this.canBeChanged(newString[index])) {
          newString =
            newString.substr(0, index) +
            newString[index].toUpperCase() +
            newString.substr(index + 1);
        }
        return newString;
      default:
        return string;
    }
  }

  getAmountOfSubstitutes() {
    return this.getRandom(1, Math.floor(this.passwordLength / 4) + 1);
  }

  generateSecurePassword() {
    let password = this.generateRandomString();
    if (this.useUpperCase) {
      const howManyUpperCase = this.getAmountOfSubstitutes();
      for (let i = 0; i < howManyUpperCase; i++) {
        password = this.substituteChar(
          password,
          this.getRandom(0, password.length),
          types.UPPERCASE
        );
      }
    }
    if (this.useNumber) {
      const howManyNumbers = this.getAmountOfSubstitutes();
      for (let i = 0; i < howManyNumbers; i++) {
        password = this.substituteChar(
          password,
          this.getRandom(0, password.length),
          types.NUMBER
        );
      }
    }
    if (this.useSymbol) {
      const howManySymbols = this.getAmountOfSubstitutes();
      for (let i = 0; i < howManySymbols; i++) {
        password = this.substituteChar(
          password,
          this.getRandom(0, password.length),
          types.SYMBOL
        );
      }
    }
    return password;
  }
}

export default PasswordGenerator;
