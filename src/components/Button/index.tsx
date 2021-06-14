import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'

const useStyles = makeStyles(() =>
  createStyles({
    contained: {
      minWidth: 105,
      minHeight: 55,
      backgroundColor: '#014bad',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#014bad',
      },
    },
    asLink: {
      minWidth: 105,
      minHeight: 55,
      color: '#474747',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    outlined: {
      minWidth: 105,
      minHeight: 55,
      color: '#014bad',
      border: '1px solid #014bad',
    },
  })
)

interface Props {
  variant?: string
  text: string
  onClick?(): void
  className?: string
  type?: 'button' | 'reset' | 'submit'
}

const ButtonStyled: React.FC<Props> = ({
  variant,
  text,
  onClick,
  className,
  type,
}) => {
  const classes = useStyles()
  switch (variant) {
    case 'contained':
      return (
        <Button
          type={type}
          onClick={onClick}
          variant="contained"
          className={clsx(classes.contained, className)}
        >
          {text}
        </Button>
      )
    case 'outlined':
      return (
        <Button
          type={type}
          onClick={onClick}
          variant="outlined"
          className={clsx(classes.outlined, className)}
        >
          {text}
        </Button>
      )

    default:
      return (
        <Button
          type={type}
          onClick={onClick}
          className={clsx(classes.asLink, className)}
        >
          {text}
        </Button>
      )
  }
}

export default ButtonStyled
