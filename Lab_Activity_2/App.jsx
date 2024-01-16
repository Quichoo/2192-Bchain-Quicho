//Brian C. Quicho WD-401
import Hello from './Components/Hello'
import Welcome from './Components/Welcome'
import Parent from './Components/Parent'
import BookList from './Components/BookList'
import MovieList from './Components/MovieList'
import TodoList from './Components/TodoList'

import { Box } from '@mui/material'


function App() {

  return (
    <>
      {/* <Hello message={message}/> */}
      {/* <Welcome /> */}
      {/* <Parent/> */}
      <Box sx={{
        display: 'flex',
        paddingTop: '100px'
      }}
      gap={8}>
        <TodoList/>
        <MovieList/>
        <BookList/>
      </Box>
      <h1>BCQ-WD401</h1>
    </>
  )
}

export default App
