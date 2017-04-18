module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
  ],
  'rules': {
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 0,
    'no-mixed-operators': 0,
  },
  'env': {
    browser: true, // let 'window', 'document' defined
    jest: true,
  }
};
