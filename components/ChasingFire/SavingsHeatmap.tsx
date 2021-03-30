import { ResponsiveHeatMapCanvas } from '@nivo/heatmap'
import { groupBy } from 'lodash'
import { useChartTheme } from '../hooks/useChartTheme'
import { useMemo } from 'react'
import { rawSavingsData } from './rawData'

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

const data = rawSavingsData
  .map(({ Date, percentage }) => ({ x: Date, y: percentage }))
  .map(({ x, y }) => {
    const date = new Date(x)
    return {
      year: date.getFullYear().toString(),
      [months[date.getMonth()]]: Math.round(y),
    }
  })

const heatMapData = Object.entries(groupBy(data, (d) => d.year)).map(
  ([key, value]) => {
    const obj = {
      year: key,
    }
    value.forEach(({ year, ...rest }) => Object.assign(obj, rest))

    return obj
  }
)

const SavngsHeatmap = () => {
  const chartTheme = useChartTheme()

  const modifiedTheme = useMemo(() => {
    const updatedTheme = { ...chartTheme }

    updatedTheme.axis.domain.line.stroke = 'rgba(0,0,0,0%)'
    updatedTheme.axis.ticks.line.stroke = 'rgba(0,0,0,0%)'

    return updatedTheme
  }, [chartTheme])

  return (
    <ResponsiveHeatMapCanvas
      data={heatMapData}
      theme={modifiedTheme}
      keys={months}
      indexBy="year"
      forceSquare={true}
      margin={{ top: 40, right: 20, bottom: 20, left: 40 }}
      hoverTarget="rowColumn"
      axisTop={{
        orient: 'top',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: '',
        legendOffset: 36,
      }}
      axisRight={null}
      // @ts-ignore
      nanColor="rgba(0,0,0,0%)"
      axisBottom={null}
      cellOpacity={1}
      cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
      labelTextColor={(d) => {
        return isFinite(d.value as number) ? '#333333' : 'rgba(0,0,0,0%)'
      }}
      animate
      motionStiffness={80}
      motionDamping={9}
      cellHoverOthersOpacity={0.25}
      minValue={10}
      maxValue={50}
    />
  )
}

export default SavngsHeatmap
