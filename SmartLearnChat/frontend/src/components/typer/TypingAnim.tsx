import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingAnim = () => {
    return (
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'This a placeholder One',
    1000,
    'This a placeholder Two',
    1000,
    'This a placeholder Three',
    1000,
    'This a placeholder Four',
    1000,
  ]}
  speed={50}
  style={{
    fontSize: '60px',
    color: 'white',
    display: 'inline-block',
    textShadow: '1px 1px 20px #000'
    }}
  repeat={Infinity}
/>
    )
}

export default TypingAnim