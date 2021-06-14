import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from '.'

describe('Footer Test', () => {
  test('Render Footer', () => {
    const { container } = render(
      <Router>
        <Footer />
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
