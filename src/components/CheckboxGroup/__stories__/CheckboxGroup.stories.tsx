import { CheckboxGroup, CheckboxGroupProps } from '../CheckboxGroup'
import { Story } from '@storybook/react/types-6-0'
import { ChangeEvent, useState } from 'react'

const Template: Story<CheckboxGroupProps> = () => {
  const [state, setState] = useState({
    low: true,
    mean: false,
    high: false,
  })

  const labels = {
    low: 'Market Low',
    mean: 'Market Mean',
    high: 'Market High',
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.checked)
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <CheckboxGroup
      label="Market Position"
      options={state}
      onChange={handleChange}
      optionsLabels={labels}
    />
  )
}

export const Primary = Template.bind({})

Primary.args = {
  label: 'Test Label',
}

const CheckboxGroupStory = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
}

export default CheckboxGroupStory
