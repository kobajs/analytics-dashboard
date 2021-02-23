import { PortsSelection, PortsSelectionProps } from "../PortsSelection";
import { Story } from "@storybook/react/types-6-0";

const Template: Story<PortsSelectionProps> = (args) => (
  <PortsSelection {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};

const PortsSelectionStory = {
  title: "Features/PortsSelection",
  component: PortsSelection,
};

export default PortsSelectionStory;
