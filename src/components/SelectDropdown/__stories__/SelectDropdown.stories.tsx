import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { SelectDropdown, SelectDropdownProps } from '../SelectDropdown';

const Template: Story<SelectDropdownProps> = (args) => {
  const [value, setValue] = useState(args.options[0].value);
  return <SelectDropdown {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Origin',
  options: [
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
    {
      value: 'NLRTM',
      label: `Rotterdam (NLRTM)`,
    },
    {
      value: 'DEHAM',
      label: `Hamburg (DEHAM)`,
    },
    {
      value: 'GBFXT',
      label: `Felixstowe (GBFXT)`,
    },
    {
      value: 'USNYC',
      label: `New York (USNYC)`,
    },
  ],
};

const SelectDropdownStory = {
  title: 'Components/SelectDropdown',
  component: SelectDropdown,
};

export default SelectDropdownStory;
