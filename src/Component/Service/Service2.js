import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Service2.css'

const Service2 = () => {
    const [gym, setGym] = useState([]);
    useEffect(() => {
        fetch("../fakeData2.json")
            .then(res => res.json())
            .then(data => setGym(data))

    })
    return (
        <div>
            <div className="service-text2">
                <h2>Group Packages</h2>
                <p>This is the most for our fitness.</p>
                <p><b>______</b></p>
            </div>
            <div className='Container'>
                <div className="m-4">
                    <Row xs={1} md={3} className="g-1">
                        {
                            gym.map((gym) => (
                                <Col >
                                    <Card className="m-4" style={{ width: '18rem' }}>
                                        <Card.Img className="img3" variant="top" src={gym.img} />
                                        <Card.Body>
                                            <Card.Title>{gym.name}</Card.Title>
                                            <Card.Text>
                                                <li>Higest Sucess Rate</li>
                                                <li>Frist Doctor Advice</li>
                                                <li>More than 10years</li>
                                            </Card.Text>
                                            <Button variant="primary">Join Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>

            </div>

        </div>
    );
};

export default Service2;