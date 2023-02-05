import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Characters from './pages/Characters'
import About from './pages/About'
import Card_info from './pages/Card_info'

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='characters'>Characters</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='characters' element={<Characters />} />
        <Route path='about' element={<About />} />
        <Route path="/characters/:id" element={<Card_info />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
