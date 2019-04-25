module.exports = function getSafe(fn, defaultValue = null) {
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
};
