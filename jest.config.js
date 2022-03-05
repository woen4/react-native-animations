const jestExpo = require("jest-expo/jest-preset");
const config = {
  ...jestExpo,
  setupFiles: ["./jest-setup.js"],
  globals: {
    __DEV__: true,
  },
};

module.exports = config;
