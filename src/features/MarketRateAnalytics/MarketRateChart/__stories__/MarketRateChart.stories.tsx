import { MarketRateChart, MarketRateChartProps } from "../MarketRateChart";
import { Story } from "@storybook/react/types-6-0";

const Template: Story<MarketRateChartProps> = (args) => (
  <MarketRateChart {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Test Label",
};

const MarketRateChartStory = {
  title: "Features/MarketRateAnalytics/MarketRateChart",
  component: MarketRateChart,
};

export default MarketRateChartStory;
