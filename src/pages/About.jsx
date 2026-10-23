import React, { useState } from 'react'
import Container from '../components/Container'

const About = () => {



  const [count, setCount] = useState(0)

  function incro() {
    setCount(count + 1)

  }


  return (
    <>
      <Container>
        <div>{count}</div>
        <button onClick={incro}>Increment</button>
      </Container>
    </>
  )
}

export default About