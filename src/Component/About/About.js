import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    const [trainer, setTrainer] = useState([]);
    useEffect(() => {
        fetch("../fakeData3.json")
            .then(res => res.json())
            .then(data => setTrainer(data))
    })
    return (
        <div>
            <div className="service-text2">
                <h2>Our Trainer & Nutritionists
                </h2>
                <p>They are most important person of our physical fitness </p>
                <p>_________</p>
            </div>
            <div>
                <div className="m-4">
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
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
            <div className='blog'>
                <h2>Our Commitment</h2>
                <p>We have to think that Our memeber to be body fit and healthy. Because our trainer try to make a body fit person. And also we have consultant of our nutrition. This is the most important of our body.Because to keep the body healthy is most important nutrition. </p>
            </div>
        </div>
    );
};

export default About;