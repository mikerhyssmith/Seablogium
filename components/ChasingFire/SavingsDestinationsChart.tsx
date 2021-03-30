import { useBreakpointValue, useColorMode } from '@chakra-ui/react'
import { ResponsiveSankey } from '@nivo/sankey'
import { useChartTheme } from '../hooks/useChartTheme'

const data = {
  nodes: [
    {
      id: 'Barclays',
      color: '#00AFE9',
    },
    {
      id: 'Halifax',
      color: '#003399',
    },
    {
      id: 'Monzo',
      color: '#ff7f50',
    },
    {
      id: 'Crowdcube',
      color: '#89d8cd',
    },
    {
      id: 'Freetrade',
      color: '#f7618b',
    },
    {
      id: 'Marcus',
      color: '#e07828',
    },
    {
      id: 'Vanguard',
      color: '#96151d',
    },
    {
      id: 'Virgin',
      color: '#fff',
    },
  ],
  links: [
    { source: 'Barclays', target: 'Crowdcube', value: 0.4 },
    { source: 'Barclays', target: 'Freetrade', value: 4.4 },
    { source: 'Barclays', target: 'Marcus', value: 40.7 },
    { source: 'Barclays', target: 'Vanguard', value: 8.1 },
    { source: 'Halifax', target: 'Virgin', value: 33.6 },
    { source: 'Monzo', target: 'Crowdcube', value: 0.5 },
    { source: 'Monzo', target: 'Freetrade', value: 1.1 },
    { source: 'Monzo', target: 'Marcus', value: 5.9 },
    { source: 'Monzo', target: 'Vanguard', value: 5.4 },
  ],
}

const legend: any = [
  {
    anchor: 'bottom-right',
    direction: 'column',
    translateX: 130,
    itemWidth: 100,
    itemHeight: 14,
    itemDirection: 'right-to-left',
    itemsSpacing: 2,
    itemTextColor: '#999',
    symbolSize: 14,
    effects: [
      {
        on: 'hover',
        style: {
          itemTextColor: '#000',
        },
      },
    ],
  },
]

const SavingsDestinationsChart = () => {
  const chartTheme = useChartTheme()
  const { colorMode } = useColorMode()
  const isMobile = useBreakpointValue({ md: false, sm: true })

  const rightMargin = isMobile ? 40 : 160

  const labelModifier = colorMode === 'dark' ? 'brighter' : 'darker'

  return (
    <ResponsiveSankey
      data={data}
      theme={chartTheme}
      margin={{ top: 20, right: rightMargin, bottom: 20, left: 40 }}
      align="justify"
      colors={(d) => d.color}
      nodeOpacity={1}
      nodeThickness={18}
      nodeInnerPadding={3}
      nodeSpacing={24}
      nodeBorderWidth={0}
      nodeBorderColor={{ from: 'color', modifiers: [['darker', 1]] }}
      linkOpacity={1}
      linkHoverOthersOpacity={0.3}
      enableLinkGradient={true}
      labelPosition="outside"
      labelOrientation="vertical"
      labelPadding={16}
      labelTextColor={{ from: 'color', modifiers: [[labelModifier, 3]] }}
      legends={isMobile ? legend : []}
    />
  )
}

export default SavingsDestinationsChart
