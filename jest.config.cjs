module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-extended/all", "jest-chain"],
  collectCoverageFrom: [
    "src/filter.js",
    "src/get.js",
    "src/add.js",
    "src/toNumber.js",
    "src/chunk.js",
    "src/ceil.js",
    "src/isEmpty.js",
    "src/upperFirst.js",
    "src/reduce.js",
    "src/clamp.js",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  transform: {
    "^.+\\.js$": [
      "babel-jest",
      {
        presets: [
          [
            "@babel/preset-env",
            { targets: { node: "current" }, modules: "commonjs" },
          ],
        ],
      },
    ],
  },
};
