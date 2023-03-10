import React from 'react';
import { Button, Card } from 'react-bootstrap';
import DATA from '../images'
import 'boxicons'

const Cards = () => {

    console.log(DATA)

    return (
        DATA.map((data) => (
            <div key={data.id} className='card-item'> 
                <Card  style={{ width: '10rem', height: '25rem' }}>
                    <Card.Img style={{width: '160px', height: '160px'}}  variant="top" src={data.images} />
                    <Card.Body>
                        <Card.Title style={{width: '128px', height: '50px'}}>{data.name}</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Card style={{ width: '8rem' , position: 'relative', right: '14px'}}>
                    <Card.Body style={{margin: 'auto', position: 'relative', right: '10px'}}>
                        <Card.Title style={{fontSize: '14px'}}>Contactanos</Card.Title>
                        <Card.Link href={data.contact?.phoneNum}>
                            <box-icon type='logo' name='whatsapp'></box-icon>
                        </Card.Link>
                        <Card.Link href={data.contact?.instgram}>
                            <box-icon type='logo' name='instagram'></box-icon>
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