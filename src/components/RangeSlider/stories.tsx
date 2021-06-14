import React from 'react'

import RangeSlider from '.'

export default {
  title: 'RangeSlider',
  component: RangeSlider,
}

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<number[]>([20, 37])
  const handleChange = (event: any, newValue: number | number[]): void => {
    setValue(newValue as number[])
  }
  return (
    <div style={{ padding: 20 }}>
      <p style={{ marginBottom: 40 }}>Sample Range Slider</p>
      <RangeSlider value={value} onChange={handleChange} />
    </div>
  )
}
