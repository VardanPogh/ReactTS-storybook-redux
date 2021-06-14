import { createMuiTheme } from '@material-ui/core/styles'

const primaryTextColor = '#545454'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'body, html, #root': {
          height: '100%',
          fontFamily: 'Poppins, sans-serif !important',
        },
        'typography, span, div, input, label': {
          fontFamily: 'Poppins, sans-serif !important',
        },
        p: {
          fontFamily: 'Poppins, sans-serif !important',
          fontSize: 18,
          color: primaryTextColor,
        },
        'h1, h2': {
          fontFamily: 'Poppins, sans-serif !important',
          fontSize: 48,
          color: primaryTextColor,
        },
      },
    },
  },
})

export default theme
