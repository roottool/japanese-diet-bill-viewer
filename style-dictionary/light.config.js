/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const { fileHeader } = require('style-dictionary').formatHelpers

/** @type {import('style-dictionary').Config} */
const config = {
  source: ['style-dictionary/generated/light.json'],
  format: {
    myFormat: ({ dictionary, file }) => {
      const lightTokenEntries = dictionary.allTokens.map((token) => [
        token.name,
        token.value,
      ])
      console.log(lightTokenEntries)
      const lightTokens = Object.fromEntries(lightTokenEntries)
      return `${fileHeader({ file })}const lightTokens = ${lightTokens}
export default lightTokens`
    },
  },
  platforms: {
    ts: {
      transforms: ['attribute/cti', 'name/cti/camel', 'size/rem', 'color/hex'],
      buildPath: 'src/styles/tokens/',
      files: [
        {
          format: 'myFormat',
          destination: 'lightTokens.ts',
        },
      ],
    },
  },
}

module.exports = config
