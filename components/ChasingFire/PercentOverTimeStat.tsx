import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import React from 'react'

const PercentOverTimeStats = () => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>Monthly Mean</StatLabel>
        <StatNumber>18%</StatNumber>
      </Stat>

      <Stat>
        <StatLabel>Minimum</StatLabel>
        <StatNumber>0%</StatNumber>
      </Stat>

      <Stat>
        <StatLabel>Maximum</StatLabel>
        <StatNumber>53%</StatNumber>
      </Stat>
    </StatGroup>
  )
}

export default PercentOverTimeStats
