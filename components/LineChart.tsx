import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    id: 'japan',
    color: 'hsl(316, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 113,
      },
      {
        x: 'helicopter',
        y: 218,
      },
      {
        x: 'boat',
        y: 82,
      },
      {
        x: 'train',
        y: 84,
      },
      {
        x: 'subway',
        y: 181,
      },
      {
        x: 'bus',
        y: 91,
      },
      {
        x: 'car',
        y: 49,
      },
      {
        x: 'moto',
        y: 248,
      },
      {
        x: 'bicycle',
        y: 96,
      },
      {
        x: 'horse',
        y: 52,
      },
      {
        x: 'skateboard',
        y: 126,
      },
      {
        x: 'others',
        y: 190,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(188, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 69,
      },
      {
        x: 'helicopter',
        y: 271,
      },
      {
        x: 'boat',
        y: 30,
      },
      {
        x: 'train',
        y: 107,
      },
      {
        x: 'subway',
        y: 1,
      },
      {
        x: 'bus',
        y: 122,
      },
      {
        x: 'car',
        y: 153,
      },
      {
        x: 'moto',
        y: 255,
      },
      {
        x: 'bicycle',
        y: 274,
      },
      {
        x: 'horse',
        y: 238,
      },
      {
        x: 'skateboard',
        y: 78,
      },
      {
        x: 'others',
        y: 79,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(29, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 83,
      },
      {
        x: 'helicopter',
        y: 228,
      },
      {
        x: 'boat',
        y: 191,
      },
      {
        x: 'train',
        y: 17,
      },
      {
        x: 'subway',
        y: 51,
      },
      {
        x: 'bus',
        y: 50,
      },
      {
        x: 'car',
        y: 122,
      },
      {
        x: 'moto',
        y: 187,
      },
      {
        x: 'bicycle',
        y: 135,
      },
      {
        x: 'horse',
        y: 127,
      },
      {
        x: 'skateboard',
        y: 178,
      },
      {
        x: 'others',
        y: 235,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(271, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 290,
      },
      {
        x: 'helicopter',
        y: 57,
      },
      {
        x: 'boat',
        y: 56,
      },
      {
        x: 'train',
        y: 253,
      },
      {
        x: 'subway',
        y: 98,
      },
      {
        x: 'bus',
        y: 204,
      },
      {
        x: 'car',
        y: 299,
      },
      {
        x: 'moto',
        y: 183,
      },
      {
        x: 'bicycle',
        y: 128,
      },
      {
        x: 'horse',
        y: 59,
      },
      {
        x: 'skateboard',
        y: 224,
      },
      {
        x: 'others',
        y: 57,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(293, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 155,
      },
      {
        x: 'helicopter',
        y: 168,
      },
      {
        x: 'boat',
        y: 256,
      },
      {
        x: 'train',
        y: 63,
      },
      {
        x: 'subway',
        y: 32,
      },
      {
        x: 'bus',
        y: 102,
      },
      {
        x: 'car',
        y: 32,
      },
      {
        x: 'moto',
        y: 214,
      },
      {
        x: 'bicycle',
        y: 132,
      },
      {
        x: 'horse',
        y: 227,
      },
      {
        x: 'skateboard',
        y: 256,
      },
      {
        x: 'others',
        y: 27,
      },
    ],
  },
]

const LineChart = ({ text, check }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}

export default LineChart
