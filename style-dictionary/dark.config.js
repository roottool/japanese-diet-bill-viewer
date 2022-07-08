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
          format: 'javascript/module',
          destination: 'darkTokens.js',
        },
        {
          format: 'typescript/module-declarations',
          destination: 'darkTokens.d.ts',
        },
      ],
    },
  },
}

module.exports = config
