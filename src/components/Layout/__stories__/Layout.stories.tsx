import { Layout } from '../Layout'
import { Story } from '@storybook/react/types-6-0'
import { SelectDropdown } from '../../SelectDropdown'

const Template: Story = () => (
  <SelectDropdown
    label="Origin"
    options={[
      {
        value: 'NOOSL',
        label: `Oslo (NOOSL)`,
      },
      {
        value: 'CNSGH',
        label: `Shanghai (CNSGH)`,
      },
      {
        value: 'CNSTG',
        label: `Shantou (CNSTG)`,
      },
    ]}
  />
)

export const Primary = Template.bind({})

Primary.args = {}

const LayoutStory = {
  title: 'Components/Layout',
  component: Layout,
}

export default LayoutStory
