import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards'
import DATA from './images'
import { Button, Card, Dropdown } from 'react-bootstrap'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'


function App() {
  const [count, setCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    setCount(DATA)
  }, [])

  const uniqueData = DATA.filter((item, index) => {
    return DATA.findIndex(obj => obj.category === item.category) === index;
  });

  const filteredData = selectedCategory ? DATA.filter(item => item.category === selectedCategory) : DATA;

  console.log(selectedCategory)
  console.log(filteredData)
  return (
    <HashRouter>
      <div className="App">
        <div style={{ position: 'fixed', width: '100%', zIndex: '2000', top: '-10px' }}>
          {<AppNavBar />}
        </div>
        <Dropdown style={{ display: 'flex', justifyContent: 'center', gap: '1rem', position: 'relative', zIndex: '30000', textAlign: 'center', top: '75px' }}>
          {/* <Button variant="success">
            <box-icon name='sort-a-z' style={{ fill: 'white' }}></box-icon>
          </Button> */}
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categorias
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              style={{ textAlign: 'center' }}
              onClick={() => setSelectedCategory(null)}
            >
              Todas
            </Dropdown.Item>
            {
              uniqueData.map((data) => (

                <Dropdown.Item
                  key={data.id}
                  onClick={() => setSelectedCategory(data.category)}
                  style={{ textAlign: 'center' }}
                >
                  {data.category}
                </Dropdown.Item>


              ))
            }

          </Dropdown.Menu>
        </Dropdown>
        <Card className='contact-box' style={{
          width: '10rem',
          height: '130px',
          position: "fixed",
          right: "-.9%",
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

        <Routes>
          <Route path='/' element={
            <div className='div-need' style={{ position: 'relative', top: '80px' }}>

              <Link className='info-aboutme' as={Link} to='/about-us'>
                <box-icon name='info-circle' size='md'></box-icon>
              </Link>

              {<Cards data={filteredData} />}
            </div>} />

          {/* <Link>character</Link> */}
          <Route path='/about-us' element={<AboutMe />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
