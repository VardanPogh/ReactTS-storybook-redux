import React from 'react'
import { render } from '@testing-library/react'

import InputField from '.'

describe('inputField', () => {
  test('Loads inputField', () => {
    const { container } = render(
      <InputField title="Login" type="text" variant="outlined" />
    )
    expect(container).toMatchSnapshot()
  })
})
