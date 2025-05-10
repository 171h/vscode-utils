// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    rules: {
      'ts/no-namespace': 'off',
      'ts/explicit-function-return-type': 'off',
    },
    ignores: [
      'src/common',
      'src/instantiation',
      'src/nls.ts',
      'src/nls.messages.ts',
    ],
  },
)
