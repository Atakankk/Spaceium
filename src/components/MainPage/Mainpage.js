import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import NasaPicture from "../Api/Nasapicture"

export default function Mainpage() {
  return (
    <div>
    
    <NasaPicture isArchive={false}/>
    </div>
    
  );
}
