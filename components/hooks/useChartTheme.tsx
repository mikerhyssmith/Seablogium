import { useColorMode } from '@chakra-ui/react'
import { Theme } from '@nivo/core'
import { useMemo } from 'react'

const baseTheme = {
  textColor: '#333333',
  fontSize: 11,
  fontFamily: 'Nunito',
  axis: {
    domain: {
      line: {
        stroke: '#777777',
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: '#777777',
        strokeWidth: 1,
      },
    },
  },
  grid: {
    line: {
      stroke: '#dddddd',
      strokeWidth: 1,
    },
  },
  tooltip: {
    container: {
      backgroundColor: '#EBEBEB',
      color: '#333333'
    }
  }
}

export const useChartTheme = (): Partial<Theme> => {
  const { colorMode } = useColorMode()

  const chartTheme = useMemo(() => {
    const newTheme = { ...baseTheme }
    if (colorMode === 'dark') {
      newTheme.textColor = '#ffff'
    }

    newTheme.tooltip.container = { backgroundColor: "#272838", color: '#ffff'}

    return newTheme
  }, [colorMode])

  return chartTheme
}
