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
      color: '#14233C',
    },
    {
      id: 'Crowdcube',
      color: '#FF5100',
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
    { source: 'Barclays', target: 'Crowdcube', value: 0.352962105 },
    { source: 'Barclays', target: 'Freetrade', value: 4.3908485868 },
    { source: 'Barclays', target: 'Marcus', value: 40.7412392452 },
    { source: 'Barclays', target: 'Vanguard', value: 8.0873971821 },
    { source: 'Halifax', target: 'Virgin', value: 33.5851914043 },
    { source: 'Monzo', target: 'Crowdcube', value: 0.4706161401 },
    { source: 'Monzo', target: 'Freetrade', value: 1.0941825256 },
    { source: 'Monzo', target: 'Marcus', value: 5.8827017508 },
    { source: 'Monzo', target: 'Vanguard', value: 5.39486106 },
  ],
}

const SavingsDestinationsChart = () => {
  const chartTheme = useChartTheme()
  return (
    <ResponsiveSankey
      data={data}
      margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
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
      legends={[
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
      ]}
    />
  )
}

export default SavingsDestinationsChart
