import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import PersonIcon from '@material-ui/icons/Person'
import InputField from '.'

export default {
  title: 'InputField',
  component: InputField,
  decorators: [withKnobs],
}
const typeOptions = {
  Text: 'text',
  Password: 'password',
  Number: 'number',
}

const variantOptions = {
  Outlined: 'outlined',
  WithIcon: 'withIcon',
}

export const Default: React.FC = () => (
  <InputField
    title={text('Title', 'Login')}
    type={select('Type', typeOptions, typeOptions.Text)}
    variant={select('Variant', variantOptions, variantOptions.Outlined)}
    icon={<PersonIcon />}
  />
)
