// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    pnpm: true,
    rules: {
      'ts/no-namespace': 'off',
      'ts/explicit-function-return-type': 'off',

    },
  },
)
