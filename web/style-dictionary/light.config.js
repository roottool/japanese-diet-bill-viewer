// @ts-check

const formatToCustomNextuiTokens = require('./customNextuiFormat')

/** @type {import('style-dictionary').Config} */
const config = {
  source: ['style-dictionary/generated/light.json'],
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
          destination: 'lightTokens.ts',
        },
      ],
    },
  },
}

module.exports = config
