import React, { useState, useEffect } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [diet, setDiet] = useState([]);
    const [gym, setGym] = useState([]);
    const [trainer, setTrainer] = useState([]);
    useEffect(() => {
        fetch("../fakeData.json")
            .then(res => res.json())
            .then(data => setDiet(data.slice(3, 6)))
    }, [])
    useEffect(() => {
        fetch("../fakeData2.json")
            .then(res => res.json())
            .then(data => setGym(data.slice(2, 5)))
    }, [])
    useEffect(() => {
        fetch("../fakedata3.json")
            .then(res => res.json())
            .then(data => setTrainer(data.slice(2, 5)))
    }, [])
    return (
        <div>
            <div className="title-text">
                <h1>The right time to get started and achieve your health goals is, now!</h1>
            </div>
            <div className="container">
                <div className="service-text1">
                    <h2 >Diet Plans Offered</h2>
                    <p className="para-text">There live the blind texts separated they right at the coast of the Semantics.</p>
                    <p><b>_________</b></p>
                </div>
                <div className="">
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
                                            <Link to="/service" className="fs-6 card-link-text"><p>View More</p></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
            <div className="container">

                <div className="service-text2">
                    <h2>Group Packages</h2>
                    <p>This is the most for our fitness.</p>
                    <p><b>______</b></p>
                </div>

                <div className="m-3">
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
                                            <Link to="/service2" className="fs-6 card-link-text "><p>View Details</p></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>


            </div>
            <div>
                <div className="service-text2">
                    <h2>Our Trainer & Nutritionists
                    </h2>
                    <p>They are most important person of our physical fitness </p>
                    <p>_________</p>
                </div>
                <div className=" container ">
                    <Row xs={1} md={3} className="g-1">
                        {
                            trainer.map((trainer) => (
                                <Col >
                                    <Card className="m-4" style={{ width: '18rem' }}>
                                        <Card.Img className="img3" variant="top" src={trainer.img} />
                                        <Card.Body>
                                            <Card.Title>{trainer.name}</Card.Title>
                                            <Card.Text>
                                                <li>Experience:{trainer.Experience}</li>
                                                <li>Age:{trainer.Age}</li>
                                            </Card.Text>
                                            <Link to="/about" className="fs-6 card-link-text"><p>View More</p></Link>
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

export default Home;