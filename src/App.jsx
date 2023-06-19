import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards'
import DATA from './images'
import { Button, Card, Dropdown } from 'react-bootstrap'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import ModalFeature from './components/ModalFeature'


function App() {
  const [count, setCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortedData, setSortedData] = useState(DATA);
  const [isSorted, setIsSorted] = useState(false);

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isSorted) {
      setSortedData([...sortedData].sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      setSortedData(DATA);
    }
  }, [isSorted]);

  const uniqueData = DATA.filter((item, index) => {
    return DATA.findIndex(obj => obj.category === item.category) === index;
  });

  const filteredData = selectedCategory ? DATA.filter(item => item.category === selectedCategory) : sortedData;


  console.log(sortedData)
  // console.log(filteredData)
  return (
    <HashRouter>
      
      <div className="App">
      {/* <ModalFeature show={show} setShow={setShow} /> */}
        <div style={{ position: 'fixed', width: '100%', zIndex: '10', top: '-10px' }}>
          {<AppNavBar />}
        </div>

        <Dropdown
          className='dropdown-cat'
          drop='down-centered'
        >
          <button
            className={`btn btn-${isSorted ? 'secondary' : 'success'}`}
            onClick={() => setIsSorted(!isSorted)}
          >
            <box-icon name='sort-a-z' style={{ fill: 'white' }}></box-icon>
          </button>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categorias
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className='category-f'
              onClick={() => setSelectedCategory(null)}
            >
              Todas
            </Dropdown.Item>
            {
              uniqueData.map((data) => (

                <Dropdown.Item
                  className='category-f'
                  key={data.id}
                  onClick={() => setSelectedCategory(data.category)}
                >
                  {data.category}
                </Dropdown.Item>


              ))
            }

          </Dropdown.Menu>
          <button
            className='btn btn-success'
            style={{ fill: 'white' }}
            onClick={() => setSortedData([...sortedData].sort(() => Math.random() - 0.5))}
          >
            <box-icon name='shuffle' animation='tada' ></box-icon>
          </button>
        </Dropdown>
        <Card className='contact-box'>
          <Card.Body className='contact'>
            {/* <Card.Title
              className='info-title'
            >¡Contactanos para agregar a tu restaurante!</Card.Title> */}
            <div className='div-socials' >
              <box-icon name='info-circle' size='md'></box-icon>

              <Card.Link className='socials-items' href="https://forms.gle/sFyGSV3ieQqFUhUx8">
                <img src='images/formulario.png' alt="" />
              </Card.Link>
              <Card.Link className='socials-items' href="https://www.instagram.com/foodguiasincelejo/">
                <img src='images/instagram.png' alt="" />
              </Card.Link>
              <Card.Link className='socials-items' href="https://www.facebook.com/foodguiasincelejo/">
                <img src='images/facebook.png' alt="" />
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
