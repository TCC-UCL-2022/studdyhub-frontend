const path = require("path");

const tsconfig = require("./tsconfig.path.json");

const removeAsterisk = (path) => path.replace("/*", "");

const aliasProps = Object.entries(tsconfig.compilerOptions.paths).map(
  ([key, value]) => {
    const newKey = removeAsterisk(key);
    let newValue = removeAsterisk(value[0]);
    newValue = path.resolve(__dirname, newValue);
    return [newKey, newValue];
  }
);

const alias = Object.fromEntries(aliasProps);

module.exports = {
  webpack: {
    alias,
  },
};
