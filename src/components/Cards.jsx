import React from 'react';
import { Button, Card } from 'react-bootstrap';
import DATA from '../images'
import 'boxicons'

const Cards = () => {

    console.log(DATA)

    return (
        DATA.map((data) => (

            <div key={data.id} className='card-item'>
                {/* <button >Search</button>
                <select >
                    <option value="">Elige un tipo</option>
                    <option >{data.category.toUpperCase()}</option>
                </select> */}
                <Card style={{ width: '10rem', height: '25rem' }}>
                    <Card.Img style={{ width: '160px', height: '160px' }} variant="top" src={data.images} />
                    <Card.Body>
                        <Card.Title style={{ width: '128px', height: '50px', }}>{data.name}</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Card style={{
                            width: '8rem', position: 'relative', right: '15px',
                            height: '95px', top: '5px'
                        }}>
                            <Card.Body style={{ margin: 'auto', position: 'relative', right: '10px', top: '-8px' }}>
                                <Card.Title style={{ fontSize: '14px' }}>Contáctanos</Card.Title>
                                <Card.Link href={data.contact?.instgram}>
                                    <img style={{ width: '35px', position: 'absolute', top: '52px' }} src='images/instagram.png' alt="" />
                                </Card.Link>
                                <Card.Link href={data.contact?.phoneNum}>
                                    <img style={{ width: '35px', position: 'absolute', right: '20px', top: '52px' }} src='images/whatsapp.png' alt="" />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        ))

    );
};

export default Cards;