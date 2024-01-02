module.exports = {
  '*.{ts,tsx}': ['eslint --fix'],
  '*.{ts,tsx,json,html,md,css}': ['prettier --write'],
  '*.{css}': ['stylelint --fix'],
}
