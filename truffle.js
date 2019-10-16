module.exports = {
  extends: ['@41north/eslint-config/mocha'],
  globals: {
    assert: 'readonly',
    artifacts: 'readonly',
    web3: 'readonly',
    contract: 'readonly',
  },
}
