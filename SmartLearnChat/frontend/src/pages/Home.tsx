import { Box, Typography } from '@mui/material'
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
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { md: "row", xs: "column" },
          gap: 5,
          my: 10,
          }}
        >
          <img 
            src="test.png"
            alt="Image Needed Here"
            style={{ width: '200px', margin: 'auto' }}
          />
          <img 
            src="test2.png"
            alt="Image Needed Here"
            style={{ width: '200px', margin: 'auto' }}
          />

        </Box>
        <Box sx={{
          width: '50%',
          display: 'block',
          flexDirection: { md: "row", xs: "column" },
          gap: 5,
          my: 10,
          }}>
            
          <h1>About</h1>
          <p>Welcome to <strong>SmartLearnChat</strong>, the innovative education platform designed to enhance the teaching and learning experience. 
          Our primary audience includes both students and professors, making it a versatile solution for educational needs.
          </p>

          <p>The core of SmartLearnChat is real-time personalized tutoring. 
          Whether you're struggling with homework, grappling complex concepts, or preparing for exams, our platform provides instant assistance across various subjects. 
          Our chatbot adapts to individual learning styles by allowing users to create custom profiles. Visual learners, auditory learners, and everyone in between can benefit from tailored responses.
          </p>
          <p>We empower professors with valuable insights. By analyzing student interactions, our platform identifies common misconceptions and areas of struggle.
          Professors can then refine their teaching methods, ensuring better learning outcomes for their students.
          </p>
        </Box>
      </Box>
    </Box>
  )
  
}

export default Home