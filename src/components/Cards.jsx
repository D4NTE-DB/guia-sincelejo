import React from 'react';
import { Button, Card } from 'react-bootstrap';
import DATA from '../images'
import 'boxicons'

const Cards = () => {

    console.log(DATA)

    return (
        DATA.map((data) => (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.images} />
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Card style={{ width: '8rem' }}>
                    <Card.Body>
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