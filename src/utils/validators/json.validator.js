function isJson(obj) {
  try {
    return JSON.parse(obj);
  } catch (error) {
    return false;
  }
}

module.exports = { isJson };