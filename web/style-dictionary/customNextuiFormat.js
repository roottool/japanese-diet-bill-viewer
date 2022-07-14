const { fileHeader } = require('style-dictionary').formatHelpers

/**
 * Generate code string for destination file.
 * @param {import('style-dictionary').Dictionary} dictionary The dictionary data which has be transformed by token-transformer.
 * @param {import('style-dictionary').File} file The file has been transformed by token-transformer.
 * @returns The code string is used for the destination file.
 */
const formatToCustomNextuiTokens = (dictionary, file) => {
  const generatedTokens = dictionary.allTokens.reduce(
    (previousValue, token) => {
      const key = token.attributes?.type ?? token.name
      const currentValue = { [key]: token.value }
      if (!token.attributes?.category) {
        return { ...previousValue, ...currentValue }
      }

      const mergedValueInCategory = {
        [token.attributes.category]: Object.assign(
          previousValue[token.attributes.category] ?? {},
          currentValue,
        ),
      }

      return {
        ...previousValue,
        ...mergedValueInCategory,
      }
    },
    {},
  )

  return `${fileHeader({ file })}const tokens = ${JSON.stringify(
    generatedTokens,
    null,
    2,
  )} as const

export default tokens`
}

module.exports = formatToCustomNextuiTokens
