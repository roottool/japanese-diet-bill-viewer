// @ts-check

const formatToCustomNextuiTokens = require('./customNextuiFormat')

/** @type {import('style-dictionary').Config} */
const config = {
  source: ['style-dictionary/generated/dark.json'],
  format: {
    customNextuiFormat: ({ dictionary, file }) =>
      formatToCustomNextuiTokens(dictionary, file),
  },
  platforms: {
    ts: {
      transforms: ['attribute/cti', 'name/cti/camel', 'size/rem', 'color/hex'],
      buildPath: 'src/styles/tokens/',
      files: [
        {
          format: 'customNextuiFormat',
          destination: 'darkTokens.ts',
        },
      ],
    },
  },
}

module.exports = config
