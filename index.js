const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
exports.validate = function isValidEmail(email) {
  return pattern.test(email);
};

exports.testPattern = pattern;
