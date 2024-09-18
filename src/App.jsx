import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RestView from './pages/RestView'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurent_view/:id' element={<RestView/>}/>
      </Routes>   
      <Footer/>
    </>
  )
}

export default App
