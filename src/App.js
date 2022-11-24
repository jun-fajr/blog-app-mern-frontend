import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Register from './components/Users/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
