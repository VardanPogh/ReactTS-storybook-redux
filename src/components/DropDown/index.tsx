import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    helperText: {
      marginLeft: 1,
    },
  })
)

interface Items {
  value: string
  label: string
}

interface Props {
  id: string
  label?: string
  value: string
  onChange(event: React.ChangeEvent<{ value: unknown }>): void
  hasHelper?: boolean
  helperText?: string
  items: Array<Items>
}

const DropDown: React.FC<Props> = ({
  id,
  label,
  value,
  onChange,
  hasHelper,
  helperText,
  items,
}) => {
  const classes = useStyles()

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        onChange={onChange}
        label={label}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {hasHelper && (
        <FormHelperText className={classes.helperText}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default DropDown
