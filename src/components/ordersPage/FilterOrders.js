import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Table } from 'reactstrap';
import { formatString } from '../util/StringFormat';
import { priceFormat } from '../util/PriceFormat';


export default function FilterOrder(props) {

    const [filterBy, setFilterBy] = useState("status");
    const [value, setValue] = useState("");
    const [filteredOrders, setFilteredOrders] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let jsonBody = {};
        if (filterBy === "email") {

            if (value === "") {
                console.log("Please select a value first");
                return;
            }
            console.log("Inside email, filterBY: " + filterBy);
            fetch(`http://localhost:8080/orders?email=${value}`, {
                method: "GET",
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((response) => response.json())
                .then((data) => {
                    setFilteredOrders(data);
                })
                .catch((err) => console.log(err));
        }
        else if (filterBy === "status") {

            if (value === "") {
                console.log("Please select a value first");
                return;
            }

            console.log("FilterBy: " + filterBy);
            console.log("Value: " + value);
            jsonBody[filterBy] = value;

            fetch('http://localhost:8080/orders/examples', {
                method: "POST",
                body: JSON.stringify(jsonBody),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((response) => response.json())
                .then((data) => {
                    setFilteredOrders(data);
                })
                .catch((err) => console.log(err));
        }
    }

    const handleFilterChange = (e) => {
        setFilterBy(e.target.value);
    }
    const handleValueChange = (e) => {
        setValue(e.target.value);
    }
    let totalCost = ((pizzaItem) => {
        let sum = 0;
        for (let i = 0; i < pizzaItem.length; i++) {
            sum = sum + pizzaItem[i].cost;
        }
        return sum;
    })

    let form;
    if (filterBy === "status") {
        form = <FormGroup row>
            <Label sm={2} for="value" style={{ textAlign: 'center', fontFamily: 'Monaco', fontWeight: 'bold', backgroundColor: 'orange' }}>Value</Label>
            <Col sm={2}>
                <Input type="select" name="value" id="value" value={value} onChange={handleValueChange}>
                    <option default value="PENDING">Pending</option>
                    <option value="COOKING">Cooking</option>
                    <option value="READY">Ready</option>
                    <option value="DELIVERING">Delivering</option>
                    <option value="COMPLETED">Completed</option>
                </Input>
            </Col>
        </FormGroup>
    }
    else if (filterBy === "email") {
        form = <FormGroup row>
            <Label sm={2} for="value" style={{ textAlign: 'center', fontFamily: 'Monaco', fontWeight: 'bold', backgroundColor: 'orange' }}>Value</Label>
            <Col sm={2}>
                <Input type="email" name="value" id="value" value={value} onChange={handleValueChange}>
                </Input>
            </Col>
        </FormGroup>
    }
    return (
        <div>
            {/* <Card> */}
            {/* <CardTitle tag="h4">By Order Status</CardTitle> */}
            {/* <Container> */}
            <br />
            <br />
            <Form>
                <FormGroup row>
                    <Label sm={2} for="filterBy" style={{ textAlign: 'center', fontFamily: 'Monaco', fontWeight: 'bold', backgroundColor: 'orange' }}>Filter By</Label>
                    <Col sm={2}>
                        <Input type="select" name="filterBy" id="filterBy" value={filterBy} onChange={handleFilterChange}>
                            <option value="status">Order Status</option>
                            <option value="email">Customer Email</option>
                        </Input>
                    </Col>
                </FormGroup>
                {form}
                <FormGroup row style={{ display: "flex" }}>
                    <Button color="danger" onClick={handleSubmit} style={{ marginLeft: 300 }}>Find Order</Button>
                </FormGroup>
            </Form>
            <Table bordered hover className='table'>
                <thead>
                    <tr style={{ backgroundColor: 'red' }}>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Customer Address</th>
                        <th>Orders</th>
                        <th>Pizza Type</th>
                        <th>Toppings</th>
                        <th>Size</th>
                        <th>Individual Costs</th>
                        <th>Total Cost</th>
                        <th>Order Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order) => {
                        return (
                            <tr key={order._id.hexString} style={{ backgroundColor: 'orange' }}>
                                <td>{formatString(order.customer.firstName)} {formatString(order.customer.lastName)}</td>
                                <td>{formatString(order.customer.email)}</td>
                                <td>{order.customer.homeAddress.streetAddress} {order.customer.homeAddress.city} {order.customer.homeAddress.state} {order.customer.homeAddress.postal}</td>
                                <td>{order.pizzas.length}</td>
                                <td>
                                    <ol style={{ paddingLeft: 15 }}>
                                        {order.pizzas.map((pizzaItem) => {
                                            return (
                                                <li>{formatString(pizzaItem.type)}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    <ol style={{ paddingLeft: 15 }}>
                                        {order.pizzas.map((pizzaItem) => {
                                            return (
                                                <li>{formatString(pizzaItem.toppings.toString())}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    <ol style={{ paddingLeft: 15 }}>
                                        {order.pizzas.map((pizzaItem) => {
                                            return (
                                                <li>{formatString(pizzaItem.size)}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    <ol style={{ paddingLeft: 15 }}>
                                        {order.pizzas.map((pizzaItem) => {
                                            return (
                                                <li>{priceFormat(pizzaItem.cost)}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    {priceFormat(totalCost(order.pizzas))}
                                </td>
                                <td>{formatString(order.type)}</td>
                                <td>{formatString(order.status)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {/* </Container> */}
            {/* </Card> */}
        </div>
    )
}