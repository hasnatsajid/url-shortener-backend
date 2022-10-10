function validateUrl(value) {
  return /^(http|https):\/\/[^ "]+$/.test(value);
}

module.exports = { validateUrl };
