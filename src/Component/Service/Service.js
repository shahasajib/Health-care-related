import React, { useState, useEffect } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = () => {
    const [diet, setDiet] = useState([]);
    useEffect(() => {
        fetch("../fakeData.json")
            .then(res => res.json())
            .then(data => setDiet(data))
    }, [])
    return (
        <div>
            <div className="service-text1">
                <h2 >Diet Plans Offered</h2>
                <p className="para-text">There live the blind texts separated they right at the coast of the Semantics.</p>
                <p><b>_________</b></p>
            </div>
            <div className="m-4">
                <Row xs={1} md={3} className="g-1 ">
                    {
                        diet.map((diet) => (
                            <Col>
                                <Card className="m-4" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className="img2" src={diet.img} />
                                    <Card.Body>
                                        <Card.Title>{diet.name}</Card.Title>
                                        <Card.Text>
                                            A healthy eating plan gives your body the nutrients it needs every day while staying within your daily calorie goal for weight loss. A healthy eating plan also will lower your risk for heart disease and other health conditions.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>{diet.time}</ListGroupItem>
                                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body className=" text-center">
                                        <Link to="/service2" className="fs-6 card-link-text"><button className="btn" >View Diet</button></Link>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
};

export default Service;