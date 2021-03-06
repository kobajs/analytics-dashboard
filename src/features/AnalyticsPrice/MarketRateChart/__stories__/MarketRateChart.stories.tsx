import { MarketRateChart, MarketRateChartProps } from '../MarketRateChart';
import { Story } from '@storybook/react/types-6-0';

const Template: Story<MarketRateChartProps> = (args) => <MarketRateChart {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

const MarketRateChartStory = {
  title: 'Features/AnalyticsPrice/MarketRateChart',
  component: MarketRateChart,
};

export default MarketRateChartStory;
