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
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-console": "off",
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
    }
};