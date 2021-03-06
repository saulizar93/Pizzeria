import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Container, Row, Col} from 'reactstrap'
import PhoneIcon from '@material-ui/icons/Phone';

export default function NavBar(){
    const buttonStyle= {
        padding: "5px",
    }
    return (
        <Container style={{paddingTop: "10px"}}>
        <Row>
            <Col style={{textAlign: "left"}}>
                <Link to="/home" style={buttonStyle}><Button color="danger">Home</Button></Link>
                <Link to="/getOrders" style={buttonStyle}><Button color="danger">Orders</Button></Link>
                <Link to="/findOrders" style={buttonStyle}><Button color="danger">Find Order</Button></Link>
                <Link to="/getCustomers" style={buttonStyle}><Button color="danger">Customers</Button></Link>
                <Link to="/findCustomers" style={buttonStyle}><Button color="danger">Find Customer</Button></Link>
            </Col>
            <Col sm={3}>
            <h4 style={{color:'black'}}>
            <PhoneIcon style={{color:'black'}}/><b> (619) 541-5365</b>
            </h4>
            </Col>
        </Row>
        </Container>
    );
}