import { AnalyticsPrice, AnalyticsPriceProps } from '../AnalyticsPrice';
import { Story } from '@storybook/react/types-6-0';

const Template: Story<AnalyticsPriceProps> = (args) => <AnalyticsPrice {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

const AnalyticsPriceStory = {
  title: 'Features/AnalyticsPrice',
  component: AnalyticsPrice,
};

export default AnalyticsPriceStory;
