import { ResponsiveLineCanvas } from '@nivo/line'
import { useChartTheme } from '../hooks/useChartTheme'
import { rawSavingsData } from './rawData'

const data = [
  {
    id: 'savings',
    data: rawSavingsData
      .map(({ Date, percentage }) => ({ x: Date, y: percentage }))
      .map(({ x, y }) => ({ x: new Date(x), y })),
  },
]

const PercentOverTimeChart = () => {
  const chartTheme = useChartTheme()

  return (
    <ResponsiveLineCanvas
      theme={chartTheme}
      data={data}
      margin={{ top: 50, right: 20, bottom: 50, left: 50 }}
      curve="monotoneX"
      xScale={{
        type: 'time',
        useUTC: false,
        precision: 'month',
      }}
      yScale={{
        type: 'linear',
        min: 0,
        max: 55,
        stacked: true,
        reverse: false,
      }}
      yFormat={(d) => `${(d as number).toFixed(1)}%`}
      xFormat="time:%m-%d"
      enableArea
      enableCrosshair
      enableGridX={false}
      enableGridY={false}
      lineWidth={3}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Date',
        legendOffset: 36,
        legendPosition: 'middle',
        format: '%b %y',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '% of income saved',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
    />
  )
}

export default PercentOverTimeChart
