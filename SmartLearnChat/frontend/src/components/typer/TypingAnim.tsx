import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingAnim = () => {
    return (
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Boost Learning with AI!',
    1000,
    'Personalized Tutoring at Your Fingertips',
    1000,
    'Unlock Individualized Insights',
    1000,
    'Tailored Learning, Anytime!',
    1000,
  ]}
  speed={50}
  style={{
    fontSize: '60px',
    color: '#18FFDC',
    display: 'inline-block',
    textShadow: '1px 1px 5px #000'
    }}
  repeat={Infinity}
/>
    )
}

export default TypingAnim