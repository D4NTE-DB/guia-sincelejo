import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {<AppNavBar />}
      <div className='div-need'>{<Cards />}</div>
      
    </div>
  )
}

export default App
