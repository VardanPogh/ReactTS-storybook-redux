import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
}

export const Default: React.FC = () => (
  <Router>
    <Footer />
  </Router>
)
