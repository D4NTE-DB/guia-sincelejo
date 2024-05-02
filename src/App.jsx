import { useEffect, useState } from "react";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import Cards from "./components/Cards";
import DATA from "./DATA";
import { Button, Card, Dropdown, Pagination } from "react-bootstrap";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ModalFeature from "./components/ModalFeature";
import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";
import ModalRandom from "./components/ModalRandom";
import CustomPagination from "./components/CustomPagination";
import ReactGA from 'react-ga';
import styles from './CSS/Cards.module.css'

const TRACKING_ID = "G-F48FSXXDME"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const initialPage = 1;

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortedData, setSortedData] = useState(DATA);
  const [isSorted, setIsSorted] = useState(false);
  const [show, setShow] = useState(false);
  const [random, setRandom] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [pantallaPequena, setPantallaPequena] = useState(false);

  const sortDataByName = () => {
    const sorted = [...DATA].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sorted);
    setPage('1')
    setShowA2Z(!showA2Z);
  };

  useEffect(() => {
    sortDataByName();
    function verificarTamanoPantalla() {
      setPantallaPequena(window.innerWidth < 768);
    }
    verificarTamanoPantalla();
    window.addEventListener("resize", verificarTamanoPantalla);
    return () => {
      window.removeEventListener("resize", verificarTamanoPantalla);
    };
  }, []);

  

  useEffect(() => {
    if (isSorted) {
      const sorted = [...DATA].sort((a, b) => a.name.localeCompare(b.name));
      if (selectedCategory) {
        setSortedData(
          sorted.filter((item) => item.category === selectedCategory)
        );
      } else {
        setSortedData(sorted);
      }
    } else {
      if (selectedCategory) {
        setSortedData(
          DATA.filter((item) => item.category === selectedCategory)
        );
      } else {
        setSortedData(DATA);
      }
    }
  }, [isSorted, selectedCategory]);

  useEffect(() => {
    setPage(initialPage); // Reset to the first page whenever the category changes
  }, [selectedCategory]);

  const uniqueData = DATA.filter((item, index) => {
    return DATA.findIndex((obj) => obj?.category === item.category) === index;
  });

  const filteredData = selectedCategory
    ? DATA.filter((item) => item.category === selectedCategory)
    : DATA;

  const totalPages = Math.ceil(Object.keys(filteredData).length / 8);

  const handleRandom = () => {
    if (!random) {
      // If data is not currently randomized, randomize it
      setSortedData([...filteredData].sort(() => Math.random() - 0.5));
      setRandom(true);
    } else {
      // If data is currently randomized, reset it to original order
      setSortedData(DATA);
      setRandom(false);
    }
  };

  const [festData, setFestData] = useState([]);
  const [showFestItems, setShowFestItems] = useState(false);
  const [showA2Z, setShowA2Z] = useState(false)

  function renderFestItems() {
    // Filter data to get only items with fest: true
    const festData = DATA.filter(item => item.fest);
    setFestData(festData);
  
    // You could also set this data to a state and render it in your component like this:
    setPage('1')
    setShowFestItems(!showFestItems);
  }

  return (
    <HashRouter>
      <div className="App">
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <ModalFeature show={show} setShow={setShow} />
        <div
          style={{
            position: "fixed",
            width: "100%",
            zIndex: "1000",
            top: "-10px",
          }}
        >
          {<AppNavBar />}
        </div>
        <ModalRandom
          data={sortedData}
          show={random}
          onHide={() => setRandom(false)}
        />
        <Dropdown className="dropdown-cat" drop="down-centered">
          <Button
            size="sm"
            className={`btn btn-${showA2Z ? "secondary" : "success"}`}
            onClick={sortDataByName}
          >
            <box-icon
              name="sort-a-z"
              className="box-icon-atoz"
              size="cssSize"
              style={{ fill: "white", width: "80%", marginTop: "5px" }}
            ></box-icon>
            {/* <img style={{ width: '50px' }} src='images/HotDogFest.png' alt='Hot Dog Fest' ></img> */}
          </Button>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{ zIndex: "10", fontSize: "smaller" }}
            fon
          >
            {selectedCategory ? selectedCategory : "Categoría"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="category-f"
              onClick={() => setSelectedCategory(null)}
            >
              Todas
            </Dropdown.Item>
            {uniqueData
              .sort((a, b) => a.category.localeCompare(b.category))
              .map((data) => (
                <Dropdown.Item
                  className="category-f"
                  key={data.id}
                  onClick={() => setSelectedCategory(data.category)}
                >
                  {data.category}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
          <Button
            size="sm"
            className="btn btn-success"
            style={{ fill: "white", zIndex: "2" }}
            onClick={handleRandom}
          >
            <box-icon
              name="shuffle"
              animation=""
              style={{ width: "80%", marginTop: "5px" }}
            ></box-icon>
          </Button>
        </Dropdown>
        <div className="pag-item">
          <CustomPagination totalPages={!showFestItems ? totalPages : 2} page={page} setPage={setPage}/>
        </div>
        <Card className="contact-box">
          <Card.Body className="contact">
            {/* <Card.Title
            className='info-title'
          >¡Contactanos para agregar a tu restaurante!</Card.Title> */}
            <div className="div-socials">
              <Card.Link onClick={() => setModalShow(true)}>
                <box-icon name="info-circle" animation="" size="md"></box-icon>
              </Card.Link>
              <Card.Link
                className="socials-items"
                href="https://forms.gle/sFyGSV3ieQqFUhUx8"
              >
                <img src="images/formulario.png" alt="" />
              </Card.Link>
              <Card.Link
                className="socials-items"
                href="https://www.instagram.com/foodguiasincelejo/"
              >
                <img src="images/instagram.png" alt="" />
              </Card.Link>

              <Card.Link
                className="socials-items"
                href="https://www.facebook.com/foodguiasincelejo/"
              >
                <img src="images/facebook.png" alt="" />
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
        <Routes>
          <Route
            path="/"
            element={
              <div
                className="div-need"
                style={{ position: "relative", top: "80px" }}
              >
                <Link className="info-aboutme" as={Link} to="/about-us">
                  <box-icon
                    name="info-circle"
                    size="md"
                    style={{ width: "90%", marginTop: "1px" }}
                  ></box-icon>
                </Link>

                {
                  <Cards
                    data={showA2Z ? sortedData : filteredData}
                    pag={page}
                    view={pantallaPequena}
                  />
                }
              </div>
            }
          />

          <Route path="/about-us" element={<AboutMe />} />
        </Routes>
        <div className="pag-item" style={{ zIndex: "-1" }}>
        <CustomPagination totalPages={!showFestItems ? totalPages : 2} page={page} setPage={setPage}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
