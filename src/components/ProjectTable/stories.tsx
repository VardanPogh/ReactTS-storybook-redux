import React from 'react'
// import { withKnobs, text, select } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

import ProjectTable from '.'

export default {
  title: 'Project Table',
  component: ProjectTable,
  // decorators: [withKnobs],
}

export const Default: React.FC = () => <ProjectTable />
