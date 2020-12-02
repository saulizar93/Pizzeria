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
        {/* <Container> */}
        <Row>
           
            <Col style={{textAlign: "left"}}>
                <Link to="/" style={buttonStyle}><Button color="danger">Home</Button></Link>
                <Link to="/getPizzas" style={buttonStyle}><Button color="danger">Pizzas</Button></Link> 
                <Link to="/findPizza" style={buttonStyle}><Button color="danger">Find Pizza</Button></Link>           
                <Link to="/getOrders" style={buttonStyle}><Button color="danger">Orders</Button></Link>
                <Link to="/getCustomers" style={buttonStyle}><Button color="danger">Customers</Button></Link>
            </Col>
            <Col sm={3}>
            <h4 style={{color:'black'}}>
            <PhoneIcon style={{color:'black'}}/><b> (619) 541-5365</b>
            </h4>
            </Col>
            {/* <Col style={{textAlight: "right"}}>
                <Button color="success">Switch to Employee</Button>
            </Col> */}
        </Row>
        </Container>
    );
}