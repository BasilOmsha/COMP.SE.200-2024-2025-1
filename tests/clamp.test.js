import clamp from "../src/clamp.js";

// Test case from clamp.js doc
test("returns the lower bound when the input is too low", () => {
  const result = clamp(-10, -5, 5);
  expect(result).toBe(-5);
});

// Test case from clamp.js doc
test("returns the upper bould when the input is too high", () => {
  const result = clamp(10, -5, 5);
  expect(result).toBe(5);
});
