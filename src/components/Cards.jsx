import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import DATA from '../images'
import 'boxicons'
import Swal from 'sweetalert2'
import ModalFeature from './ModalFeature';



const Cards = ({ data, pag }) => {

    // console.log(props)
    let page = 6;

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const adjustedPag = pag < 1 ? 1 : pag
        const newData = data?.slice(page * (adjustedPag - 1), page * adjustedPag);
        setFilteredData(newData);
       
    }, [data, pag]);

    // useEffect(() => {
    //     axios.get(`${url}`)
    //     .then(res => {
    //         setPokemon(res.data)
    //         if (res.data.types[0].type.name.includes(selectedType) || res.data.types[1]?.type.name.includes(selectedType) ) {
    //         }

    //     });
    // }, [])
    
    console.log(page)

    const [show, setShow] = useState(false);

    return (
        filteredData.map?.((data) => (


            <div key={data?.id} className='card-item'>
                <ModalFeature show={show} setShow={setShow} />
                
                {/* <button >Search</button>
                <select >
                    <option value="">Elige un tipo</option>
                    <option >{data.category.toUpperCase()}</option>
                </select> */}
                <Card style={{ width: '10rem', height: '21rem' }}>
                    <Card.Img style={{
                        width: '160px',
                        height: '160px'
                    }}
                        variant="top"
                        src={data.images} />
                    <Card.Body>
                        <Card.Title style={{
                            width: '128px',
                            height: '50px',
                            position: 'relative',
                            top: '10px'
                        }}>{data.name}</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Card style={{
                            width: '8rem',
                            position: 'relative',
                            height: '95px',
                            top: '5px'
                        }}>
                            <Card.Body style={{
                                margin: 'auto', position: 'relative',
                                right: '10px',
                                top: '-8px'
                            }}>

                                <Card.Title style={{ position: 'relative', top: '15px', fontSize: '14px', right: '-11px' }}>Contáctanos</Card.Title>
                                <div style={{ position: 'relative', right: '14px', top: '-40px' }}>
                                    <Card.Link href={data.contact?.instgram}>
                                        <img style={{ width: '35px', position: 'absolute', top: '52px' }} src='images/instagram.png' alt="" />
                                    </Card.Link>
                                    <Card.Link href={data.contact?.phoneNum}>
                                        <img style={{ width: '35px', position: 'absolute', right: '-23px', top: '52px' }} src='images/whatsapp.png' alt="" />

                                    </Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        ))

    );
};

export default Cards;