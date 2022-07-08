// @ts-check

/** @type {import('style-dictionary').Config} */
const config = {
  source: ['style-dictionary/generated/light.json'],
  platforms: {
    ts: {
      transformGroup: 'js',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          format: 'javascript/module',
          destination: 'lightTokens.js',
        },
        {
          format: 'typescript/module-declarations',
          destination: 'lightTokens.d.ts',
        },
      ],
    },
  },
}

module.exports = config
