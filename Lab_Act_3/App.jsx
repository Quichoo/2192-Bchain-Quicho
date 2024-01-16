import React from 'react'
import Demo1 from './components/Conditional-demo-1'
import Demo2 from './components/Conditional-demo-2'
import Demo3 from './components/Conditional-demo-3'
import Demo4 from './components/Conditional-demo-4'
import { Container } from '@mui/material'

function App() {
  

  return (
   <>
    <Container sx={{
      display: 'flex'
    }}
    >
      <Demo1/>
      <Demo2/>
      <Demo3/>
      <Demo4/>
    </Container>
    <Container sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <h1>Bcq WD-401</h1>
    </Container>
   </>
  )
}

export default App
