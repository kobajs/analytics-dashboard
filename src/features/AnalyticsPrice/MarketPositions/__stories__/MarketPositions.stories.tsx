import { MarketPositions, MarketPositionsProps } from '../MarketPositions';
import { Story } from '@storybook/react/types-6-0';

const Template: Story<MarketPositionsProps> = (args) => <MarketPositions {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

const MarketPositionsStory = {
  title: 'Features/AnalyticsPrice/MarketPositions',
  component: MarketPositions,
};

export default MarketPositionsStory;
