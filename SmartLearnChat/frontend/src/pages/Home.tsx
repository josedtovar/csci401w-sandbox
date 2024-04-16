import { Box } from '@mui/material'
import React from 'react'
import TypingAnim from '../components/typer/TypingAnim'

function Home() {
  return (
    <Box width={'100%'} height={'100%'}>
      <Box
        sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        mx: 'auto',
        mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
      </Box>
    </Box>
  )
}

export default Home