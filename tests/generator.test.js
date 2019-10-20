import PasswordGenerator from "../src/tools/generator";

describe("PasswordGenerator", function() {
  let passwordGenerator;
  const passwordString = "abcdefgh";

  beforeEach(() => {
    passwordGenerator = new PasswordGenerator();
  });

  describe("substituteChar", () => {
    it("should substitute a char for a number", () => {
      const result = passwordGenerator.substituteChar(
        passwordString,
        0,
        types.NUMBER
      );
      expect(regExps[types.NUMBER].test(result[0])).toEqual(true);
    });

    it("should substitute a char for a symbol", () => {
      const result = passwordGenerator.substituteChar(
        passwordString,
        2,
        types.SYMBOL
      );
      expect(regExps[types.SYMBOL].test(result[2])).toEqual(true);
    });

    it("should substitute a char for its uppercase counterpart", () => {
      const result = passwordGenerator.substituteChar(
        passwordString,
        2,
        types.UPPERCASE
      );
      expect(result[2]).toEqual(passwordString[2].toUpperCase());
      expect(regExps[types.UPPERCASE].test(result[2])).toEqual(true);
    });
  });

  describe("generateSecurePassword", () => {
    it("should generate a secure password with at least 1 number", () => {
      const passwordGenerator = new PasswordGenerator(12, true);
      const result = passwordGenerator.generateSecurePassword();
      expect(result.length).toEqual(12);
      expect(result.search(regExps[types.NUMBER])).not.toEqual(-1);
    });

    it("should generate a secure password with at least 1 symbol", () => {
      const passwordGenerator = new PasswordGenerator(12, false, true);
      const result = passwordGenerator.generateSecurePassword();
      expect(result.length).toEqual(12);
      expect(result.search(regExps[types.SYMBOL])).not.toEqual(-1);
    });

    it("should generate a secure password with at least 1 uppercase char", () => {
      const passwordGenerator = new PasswordGenerator(12, false, false, true);
      const result = passwordGenerator.generateSecurePassword();
      expect(result.length).toEqual(12);
      expect(result.search(regExps[types.UPPERCASE])).not.toEqual(-1);
    });

    it("should generate a secure password with at least 1 char of each type", () => {
      const passwordGenerator = new PasswordGenerator(12, true, true, true);
      const result = passwordGenerator.generateSecurePassword();
      expect(result.length).toEqual(12);
    });
  });

  it("getRandom should return a random number in a set range", () => {
    const result = passwordGenerator.getRandom(1, 3);
    expect(result >= 1 && result < 3).toBe(true);
  });

  it("generateRandomInt should return a random number in string format", () => {
    const result = passwordGenerator.generateRandomInt();
    expect(typeof result).toEqual("string");
    expect(parseInt(result) >= 0 && parseInt(result) <= 9).toBe(true);
  });

  it("generateRandomChar should return a letter between A and Z", () => {
    const result = passwordGenerator.generateRandomChar();
    expect(regExps[types.CHAR].test(result)).toBe(true);
  });

  it("generateRandomSymbol should return one of supported symbols", () => {
    const result = passwordGenerator.generateRandomSymbol();
    expect(regExps[types.SYMBOL].test(result)).toBe(true);
  });

  it("getAmountOfSubstitutes should return a random number in a range between 1 and (passwordLength/4)+1", () => {
    const passwordGenerator = new PasswordGenerator(12);
    const result = passwordGenerator.getAmountOfSubstitutes();
    expect(result >= 1 && result <= 12 / 4 + 1).toBe(true);
  });
});
