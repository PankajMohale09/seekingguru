// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import HeaderPage from './pages/header/HeaderPage'
import FooterPage from './pages/FooterPage'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HeaderPage></HeaderPage>
      <Home></Home>
      <FooterPage></FooterPage>
    </>
  )
}

export default App
