import Navlogo from './/images/Navlogo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useParams, Link } from 'react-router-dom';
import { useToken } from './auth';
import { useAuthContext } from './auth'
import React, { useEffect, useState } from 'react';

function Navigation() {

    const [logged,setLogged]=useState(
        false
    )

    const {id} = useParams()

    const [,,logout] = useToken();

    const { token } = useAuthContext();

    function loggedIn(token){
        if (token){
            setLogged(true)
        }
    }
    const submitLogoutHandler = e => {
        e.preventDefault();
        logout(id)
        setLogged(false)
        }

    useEffect( ()=>{loggedIn(token)},[token])

    return (
        <Navbar variant='dark' expand="lg" className="rounded" style={{backgroundColor:"mediumorchid"}}>
        <Container fluid>
            <Navbar.Brand href="/">
                <img
            src={Navlogo}
            alt=""
            width="70px"
            style={{
            marginRight: "50px"
            }}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <div className='px-3'>
                    <Link to={`everything-is-vine/wineries/${id}`} className='btn btn-light p-2 mb-1 mt-1'>Home</Link>
                </div>
                <div className='px-3'>
                    <Link to={`everything-is-vine/wineries/${id}/wines`} className='btn btn-light p-2 mb-1 mt-1'>Our Wines</Link>
                </div>
                <div className='px-3'>
                <Link to={`everything-is-vine/wineries/${id}/contact`} className='btn btn-light p-2 mb-1 mt-1'>Contact Us</Link>
                </div>
                <div className='px-3'>
                <Link to={`everything-is-vine/wineries/${id}/request`} className='btn btn-light p-2 mb-1 mt-1'>Request</Link>
                </div>
                </Nav>
                <Nav className="ms auto">
                    <div className='px-3 me-auto justify-content-end'>
                        <Link to={`everything-is-vine/wineries/${id}/login`} className={"btn btn-light p-2 mb-1 mt-1" + (logged ? " d-none":"")}>Login</Link>
                    </div>
                    <div className='px-3'>
                        <Link to={`everything-is-vine/wineries/${id}/signup`} className={"btn btn-light p-2 mb-1 mt-1" + (logged ? " d-none":"")}>Sign Up</Link>
                    </div>
                    <div className='px-3'>
                        <button type="submit" className={"btn btn-light p-2 mb-1 mt-1" + (logged ? "":" d-none")} onClick={submitLogoutHandler}>Logout</button>
                    </div>
                </Nav>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link> */}
            {/* </Nav> */}
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;


