import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Changewindow from './components/Changewindow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <Changewindow />
      </div>

    </>
  )
}

export default App
