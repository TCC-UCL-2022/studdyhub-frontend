const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@features": path.resolve(__dirname, "src/features"),
      "@services": path.resolve(__dirname, "src/services"),
      "@pages": path.resolve(__dirname, "src/pages/index.ts"),
      "@enums": path.resolve(__dirname, "src/common/enums/index.ts"),
      "@routes": path.resolve(__dirname, "src/common/routes/index.ts"),
    },
  },
};
