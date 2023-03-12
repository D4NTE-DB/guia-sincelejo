import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards'
import DATA from './images'
import { Card } from 'react-bootstrap'


function App() {
  const [count, setCount] = useState(0)
  const [searchId, SetSearchId] = useState("");
  const [locationsSuggestions, setLocationsSuggestions] = useState([]);


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
    if (searchId) {
      setLocationsSuggestions(DATA.searchId);
    } else setLocationsSuggestions([]);
  }, [searchId])

  return (
    <div className="App">
      <div style={{ position: 'fixed', width: '100%', zIndex: '2000', top: '-10px' }}>
        {<AppNavBar />}
      </div>
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

      <div className='contact-us' style={{ background: 'red' }}>
        <Card.Body >

        </Card.Body>
      </div>
      <Card className='contact-box' style={{
        width: '10rem',
        height: '130px',
        position: "fixed",
        right: "-.2%",
        top: "46%",
        zIndex: 1000
      }}>
        <Card.Body className='contact'>
          <Card.Title style={{
            fontSize: '14px',
            width: '100px',
            position: 'relative',
            top: '5px',
            textAlign: 'center',
            color: '#322929'
          }}>¡Contactanos para agregar a tu restaurante!</Card.Title>
          <div style={{ position: 'relative', top: '-75px', right: '-30px' }}>
            <Card.Link href="https://forms.gle/y5BLA3eu2XFSVXNy5">
              <img style={{
                width: '35px',
                position: 'absolute',
                right: '120px',
                top: '80px'
              }} src='images/formulario.png' alt="" />
            </Card.Link>
            <Card.Link href="https://www.instagram.com/foodguiasincelejo/">
              <img style={{
                width: '35px',
                position: 'absolute',
                right: "80px",
                top: "81px"
              }} src='images/instagram.png' alt="" />
            </Card.Link>
            <Card.Link href="https://www.facebook.com/profile.php?id=100090631706684">
              <img style={{
                width: '35px',
                position: 'absolute',
                right: "40px",
                top: "80px"
              }} src='images/facebook.png' alt="" />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
      <div className='div-need' style={{ position: 'relative', top: '80px' }}>{<Cards />}</div>

    </div>
  )
}

export default App
