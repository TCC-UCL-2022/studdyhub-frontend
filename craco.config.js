const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@features": path.resolve(__dirname, "src/features"),
      "@services": path.resolve(__dirname, "src/services"),
      "@pages": path.resolve(__dirname, "src/pages/index.ts"),
      "@enums": path.resolve(__dirname, "src/common/enums/index.ts"),
      "@routes": path.resolve(__dirname, "src/common/routes/index.ts"),
      "@config": path.resolve(__dirname, "src/common/config/index.ts"),
      "@constants": path.resolve(__dirname, "src/common/constants/index.ts"),
      "@lib": path.resolve(__dirname, "src/common/lib/index.ts"),
    },
  },
};
