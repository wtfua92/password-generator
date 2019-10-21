import PasswordGenerator from "../src/tools/generator";
import { types } from "../src/tools/constants";

describe("PasswordGenerator", function() {
  let passwordGenerator;
  const passwords = {
    default: "abcdefgh",
    integer: "1abcdefg",
    uppercase: "Abcdefgh",
    symbol: "$abcdefg",
    all: "1!Abcdef"
  };

  beforeEach(() => {
    passwordGenerator = new PasswordGenerator();
  });

  it("getRandomNumber should return a number in a set range", () => {
    const result = passwordGenerator.getRandomNumber(1, 3);
    expect(result >= 1 && result <= 3).toBe(true);
  });

  it("getRandomValue should return a random value in a set of defined values", () => {
    const values = "abc";
    const result = passwordGenerator.getRandomValue("abc");
    expect(values.includes(result)).toBe(true);
  });

  describe("passwordGeneratorValues", () => {
    it("should return low case alphabetic values if valueType param is not provided", () => {
      const result = passwordGenerator.passwordGeneratorValues();
      expect(result).toEqual(passwordGenerator.alphabeticValues);
    });

    it("should return lowercase alphabetic values and integers if valueType equals 'integer'", () => {
      const result = passwordGenerator.passwordGeneratorValues(types.INTEGER);
      expect(result).toEqual(
        passwordGenerator.alphabeticValues + passwordGenerator[types.INTEGER]
      );
    });

    it("should return lowercase and uppercase alphabetic values if valueType equals 'uppercase'", () => {
      const result = passwordGenerator.passwordGeneratorValues(types.UPPERCASE);
      expect(result).toEqual(
        passwordGenerator.alphabeticValues + passwordGenerator[types.UPPERCASE]
      );
    });

    it("should return lowercase alphabetic values and symbols if valueType equals 'symbol'", () => {
      const result = passwordGenerator.passwordGeneratorValues(types.SYMBOL);
      expect(result).toEqual(
        passwordGenerator.alphabeticValues + passwordGenerator[types.SYMBOL]
      );
    });
  });

  describe("passwordMeetsRequirements", () => {
    it("should return true for default password without settings", () => {
      const result = passwordGenerator.passwordMeetsRequirements(
        passwords.default
      );
      expect(result).toBe(true);
    });

    it("should return true for password with integer and corresponding settings", () => {
      const result = passwordGenerator.passwordMeetsRequirements(
        passwords.integer,
        {
          integer: true
        }
      );
      expect(result).toBe(true);
    });

    it("should return true for password with uppercase and corresponding settings", () => {
      const result = passwordGenerator.passwordMeetsRequirements(
        passwords.uppercase,
        {
          uppercase: true
        }
      );
      expect(result).toBe(true);
    });

    it("should return true for password with symbol and corresponding settings", () => {
      const result = passwordGenerator.passwordMeetsRequirements(
        passwords.symbol,
        {
          symbol: true
        }
      );
      expect(result).toBe(true);
    });

    it("should return true for password with all elements and corresponding settings", () => {
      const result = passwordGenerator.passwordMeetsRequirements(
        passwords.all,
        {
          symbol: true,
          uppercase: true,
          integer: true
        }
      );
      expect(result).toBe(true);
    });

    it("should return false for password that doesn't meet requirements", () => {
      const result = passwordGenerator.passwordMeetsRequirements(
        passwords.default,
        {
          symbol: true,
          uppercase: true,
          integer: true
        }
      );
      expect(result).toBe(false);
    });
  });

  describe("generatePassword", () => {
    it("should generate a password of a set length", () => {
      const result = passwordGenerator.generatePassword(12);
      expect(result.length).toEqual(12);
    });

    it("should recursively call itself if generated password doesn't meet requirements", () => {
      const passwordMeetsRequirementsMock = jest.fn();
      const spy = jest.spyOn(passwordGenerator, "generatePassword");
      passwordGenerator.passwordMeetsRequirements = passwordMeetsRequirementsMock;
      passwordMeetsRequirementsMock.mockReturnValueOnce(false);
      passwordMeetsRequirementsMock.mockReturnValueOnce(true);
      passwordGenerator.generatePassword(12, { uppercase: true });
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });
});
