// @ts-check

/** @type {import('style-dictionary').Config} */
const config = {
  source: ['style-dictionary/generated/dark.json'],
  platforms: {
    ts: {
      transformGroup: 'js',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'darkTokens.js',
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'darkTokens.d.ts',
        },
      ],
    },
  },
}

module.exports = config
