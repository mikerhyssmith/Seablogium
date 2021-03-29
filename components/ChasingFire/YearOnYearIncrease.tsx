import { ResponsiveBarCanvas } from '@nivo/bar'
import { groupBy } from 'lodash'
import { useChartTheme } from '../hooks/useChartTheme'
import { rawSavingsData } from './rawData';

const data = rawSavingsData.map(({Date, percentage}) => ({x: Date, y: percentage}))
.map(({ x, y }) => {
  const date = new Date(x)
  return {
    year: date.getFullYear().toString(),
    value: Math.round(y),
  }
})

const barChartData = Object.entries(groupBy(data, (d) => d.year)).map(
  ([key, values]) => {
    let sum = 0;
    values.forEach(({value}) => sum +=value);

    return {
        year: key.toString(),
        avg: Math.round(sum/values.length)
      }
  }
)


const YearOnYearIncreaseChart = () => {
  const chartTheme = useChartTheme();

  return (
    <ResponsiveBarCanvas
    data={barChartData}
    theme={chartTheme}
    indexBy="year"
    keys={['avg']}
    margin={{ top: 20, right: 20, bottom: 30, left: 20 }}
    pixelRatio={2}
    padding={0.15}
    innerPadding={0}
    minValue="auto"
    maxValue="auto"
    groupMode="stacked"
    layout="vertical"
    reverse={false}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    borderWidth={0}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    axisRight={null}
    axisLeft={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Year',
        legendPosition: 'middle',
        legendOffset: 36
    }}
    enableGridX={false}
    enableGridY={false}
    enableLabel={true}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    isInteractive={true}
/>
  )
}

export default YearOnYearIncreaseChart
