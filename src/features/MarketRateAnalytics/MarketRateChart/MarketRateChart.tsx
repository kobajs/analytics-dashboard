import { FC } from 'react'
import moment from 'moment'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import data from './__fixtures__/marketRates.json'

export type MarketRateChartProps = {
  label: string
}

export const MarketRateChart: FC<MarketRateChartProps> = ({ label }) => {
  console.log(data)
  return (
    <div>
      <h1>My Chart</h1>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickFormatter={(value) => moment(value).format('MMM DD')}
          />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="low" stroke="#8884d8" />
          <Line type="monotone" dataKey="mean" stroke="#82ca9d" />
          <Line type="monotone" dataKey="high" stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
