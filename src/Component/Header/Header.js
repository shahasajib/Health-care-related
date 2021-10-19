import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import banner from "../../Images/banner.jpg"
import useFirebase from '../Hooks/useFirebase';

const Header = () => {
    const { handleLogOut, user } = useFirebase()
    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand className="header-name" href="#home"><span className="header-Word">N</span>utrition & Gymnastics Center</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="nav">
                            <Nav className="m-2 nav-text">
                                <NavLink className="list" to="/home">Home</NavLink>
                                <NavLink className="list" to="/service">Service</NavLink>
                                <NavLink className="list" to="/about">About us</NavLink>
                                {user.email && <span style={{ color: 'black' }}>Hello, {user.displayName} </span>}

                                {
                                    user.email ?
                                        <button className="list" onClick={handleLogOut}>log out</button>
                                        :
                                        <NavLink className="list" to="/login">LogIn</NavLink>}

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <img className="img" src={banner} alt="" fluid />
                </div>
            </div>
        </div>
    );
};

export default Header;