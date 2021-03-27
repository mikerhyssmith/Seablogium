import { ResponsiveBarCanvas } from '@nivo/bar'
import { groupBy } from 'lodash'
import { useChartTheme } from '../hooks/useChartTheme'
import { useMemo } from 'react';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = [
  { x: 1485907200000, y: 13.9173421217 },
  { x: 1488326400000, y: 13.9188918335 },
  { x: 1491004800000, y: 13.9015547499 },
  { x: 1493596800000, y: 13.9015547499 },
  { x: 1496275200000, y: 13.9015547499 },
  { x: 1498867200000, y: 12.949744631 },
  { x: 1501545600000, y: 12.949744631 },
  { x: 1504224000000, y: 0.0 },
  { x: 1506816000000, y: 5.1798978524 },
  { x: 1509494400000, y: 7.6542327907 },
  { x: 1512086400000, y: 0.9393103448 },
  { x: 1514764800000, y: 0.0 },
  { x: 1517443200000, y: 0.0 },
  { x: 1519862400000, y: 0.0 },
  { x: 1522540800000, y: 0.0 },
  { x: 1525132800000, y: 0.0 },
  { x: 1527811200000, y: 30.5334575483 },
  { x: 1530403200000, y: 0.0 },
  { x: 1533081600000, y: 24.3380685821 },
  { x: 1535760000000, y: 0.0 },
  { x: 1538352000000, y: 34.305170218 },
  { x: 1541030400000, y: 21.4388927241 },
  { x: 1543622400000, y: 28.9425051775 },
  { x: 1546300800000, y: 29.8888136134 },
  { x: 1548979200000, y: 8.3661005605 },
  { x: 1551398400000, y: 35.0607387457 },
  { x: 1554076800000, y: 25.5755539291 },
  { x: 1556668800000, y: 4.122895262 },
  { x: 1559347200000, y: 5.0727650728 },
  { x: 1561939200000, y: 4.158004158 },
  { x: 1564617600000, y: 5.2908937605 },
  { x: 1567296000000, y: 5.0594485201 },
  { x: 1569888000000, y: 32.2539843157 },
  { x: 1572566400000, y: 31.8296795953 },
  { x: 1575158400000, y: 26.0353851825 },
  { x: 1577836800000, y: 23.2612966601 },
  { x: 1580515200000, y: 12.550481638 },
  { x: 1583020800000, y: 31.0329656516 },
  { x: 1585699200000, y: 38.1124943378 },
  { x: 1588291200000, y: 40.3680346099 },
  { x: 1590969600000, y: 41.1874064781 },
  { x: 1593561600000, y: 39.7334611401 },
  { x: 1596240000000, y: 10.2903008198 },
  { x: 1598918400000, y: 53.0412882546 },
  { x: 1601510400000, y: 17.1727322453 },
  { x: 1604188800000, y: 49.1405165144 },
  { x: 1606780800000, y: 20.8847994463 },
  { x: 1609459200000, y: 9.5404068029 },
].map(({ x, y }) => {
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
        avg: Math.round(sum/12)
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
