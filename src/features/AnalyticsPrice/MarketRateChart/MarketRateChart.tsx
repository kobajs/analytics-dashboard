import { FC } from 'react';
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@material-ui/core';

import { useMarketRateChartStyles } from './MarketRateChart.styles';
import { useFilteredMarketRates } from '../AnalyticsPrice.selectors';

export type MarketRateChartProps = {};

export const MarketRateChart: FC<MarketRateChartProps> = () => {
  const classes = useMarketRateChartStyles();
  const { marketRates } = useFilteredMarketRates();

  if (marketRates.length === 0) {
    return (
      <div className={classes.notFound}>
        <Typography color="error">No data found</Typography>
      </div>
    );
  }

  return (
    <div className={classes.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={marketRates}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickFormatter={(value) => moment(value).format('MMM DD')} interval={7} />
          <YAxis
            type="number"
            tickCount={8}
            // Choose to not extract those functions since it's component coupled and brings a complete reading about what is doing.
            tickFormatter={(value) => `$${value}`}
            domain={[
              (dataMin: number) => Math.floor(dataMin / 100) * 100 - 200,
              (dataMax: number) => Math.floor(dataMax / 100) * 100 + 200,
            ]}
          />
          <Tooltip
            formatter={(value: number) => `$${value}`}
            labelFormatter={(label: Date) => moment(label).format('MMM DD, YYYY')}
          />
          <Legend />
          <Line type="monotone" dataKey="low" stroke="#8884d8" />
          <Line type="monotone" dataKey="mean" stroke="#82ca9d" />
          <Line type="monotone" dataKey="high" stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
