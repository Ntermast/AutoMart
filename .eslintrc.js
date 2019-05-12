module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "uses": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-console": "off",
        "no-uses": "off",
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
    }
};