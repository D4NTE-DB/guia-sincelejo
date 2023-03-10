import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards'
import DATA from './images'


function App() {
  const [count, setCount] = useState(0)
  const [searchId, SetSearchId] = useState("");
  const [ locationsSuggestions, setLocationsSuggestions] = useState([]);


  useEffect(() => {
    setCount(DATA)
  }, [])

  const SearchI = () => {
    setCount(DATA.searchId);
  }

  const selectSuggestion = suggestion => {
    setCount(suggestion);
    SetSearchId("");
  }

  
  useEffect(() => {
    if(searchId){
      setLocationsSuggestions(DATA.searchId);
    } else setLocationsSuggestions([]);
  }, [searchId])

  return (
    <div className="App">
      
      {<AppNavBar />}
      {/* <div className="search">
          <input type="text"
            placeholder="Set a Location"
            value={searchId}
            onChange={e => SetSearchId(e.target.value)}

          />

          <button onClick={SearchI} >Search</button>
          <ul className="suggestions-list">
          {locationsSuggestions?.map(suggestion => (
            <h5 onClick={() => selectSuggestion(suggestion)}>{suggestion.name}</h5>
          ))}
        </ul>
        </div> */}
      <div className='div-need'>{<Cards />}</div>
      
    </div>
  )
}

export default App
