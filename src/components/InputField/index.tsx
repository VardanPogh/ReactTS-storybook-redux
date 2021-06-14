import React, { ReactComponentElement } from 'react'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
  title: string
  type?: string
  icon?: ReactComponentElement<any>
  variant?: string
  id?: string
  onChange?(e: any): void
  defaultValue?: string
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

const InputField: React.FC<Props> = ({
  title,
  type,
  variant,
  icon,
  id,
  onChange,
  defaultValue,
}) => {
  const classes = useStyles()
  switch (variant) {
    case 'withIcon':
      return (
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>{icon}</Grid>
            <Grid item>
              <TextField
                id={id}
                label={title}
                type={type}
                onChange={onChange}
                defaultValue={defaultValue}
              />
            </Grid>
          </Grid>
        </div>
      )
    default:
      return (
        <TextField
          id={id}
          label={title}
          variant="outlined"
          type={type}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      )
  }
}

export default InputField
