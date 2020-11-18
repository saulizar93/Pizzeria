import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Container, Row, Col} from 'reactstrap'

export default function NavBar(){
    const buttonStyle= {
        padding: "5px",
    }
    return (
        <Container style={{paddingTop: "10px"}}>
        <Row>
            <Col />
            <Col style={{textAlign: "center"}}>
                <Link to="/getPizzas" style={buttonStyle}><Button color="info">Pizzas</Button></Link>            
                <Link to="/getOrders" style={buttonStyle}><Button color="info">Orders</Button></Link>
                <Link to="/getCustomers" style={buttonStyle}><Button color="info">Customers</Button></Link>
            </Col>
            <Col style={{textAlight: "right"}}>
                <Button color="success">Switch to Employee</Button>
            </Col>
        </Row>
        </Container>
    );
}