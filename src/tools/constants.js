// min max
// A - Z
export const charRange = [65, 90];
// 0 - 9
export const numRange = [0, 9];
// ! # $ % & ( ) * + - / = @ \ ^ _
export const symbols = [33, 35, 36, 37, 38, 40, 41, 42, 43, 45, 47, 61, 64, 92, 94, 95];

export const regExps = {
    CHAR: /[A-z]/,
    SYMBOL: /[!#$%&()*+\-/=@\\^_]/,
    NUMBER: /\d/,
    UPPERCASE: /[A-Z]/
};

export const types = {
    NUMBER: 'NUMBER',
    SYMBOL: 'SYMBOL',
    UPPERCASE: 'UPPERCASE',
    CHAR: 'CHAR'
};

export default {
    charRange,
    numRange,
    symbols,
    types,
    regExps
};