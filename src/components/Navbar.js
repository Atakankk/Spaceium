import React from 'react'
import { Link } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Navigationbar() {
    const { currentUser } = useAuth();
    return (
        <div>
        {currentUser && 
            <Navbar className="navbar-light bg-primary text-white justify-content-around">
                <Link to="/">
                <Navbar.Brand>
            <img
              src="https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png"
              width="64px"
              height="64px"
            ></img>
          </Navbar.Brand></Link>
          
          <Nav.Link href="/photo-random" className="text-white">Random Photos</Nav.Link>
          <Nav.Link href="/near-astreoids" className="text-white">Near Astreoids Today</Nav.Link>
          <Nav.Link href="/current-astronauts" className="text-white">Astronauts in Space</Nav.Link>
          <Link to={"/profile"} className="position-end">
            <Button variant="dark" size="md">
              Profile Page
            </Button>
          </Link>
          
        </Navbar>
        }
        </div>
    )
}
