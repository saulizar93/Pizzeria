import React, { useState, useEffect} from 'react';
import {Table, Container} from 'reactstrap';
import { priceFormat } from '../util/PriceFormat';
import {formatString} from '../util/StringFormat'

export default function OrderPage(){

    const [orders, setOrders] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/orders')
        .then( (response)=> response.json())
        .then( (data)=>{
            setOrders(data);
            console.log(data);
        })
        .catch( (err)=> console.log(err));
    },[])
    return(
        <Container>
            <h1 style={{textAlign:'center', fontFamily:'Monaco', fontWeight:'bold'}}> Pizza Orders </h1>
            <Table hover bordered className='table'>
                <thead>
                    <tr style={{backgroundColor:'red'}}> 
                        <th>Customer Name</th>
                        <th>Pizza Type</th>
                        <th>Toppings</th>
                        <th>Size</th>
                        <th>Cost</th>
                        <th>Order Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map( (order)=>{
                        return(
                            <tr key={order._id.hexString} style={{backgroundColor:'orange'}}>
                                <td>{formatString(order.customer.firstName)} {formatString(order.customer.lastName)}</td>
                                <td>{formatString(order.pizzas[0].type)}</td>
                                <td>{formatString(order.pizzas[0].toppings.toString())}</td>
                                <td>{formatString(order.pizzas[0].size)}</td>
                                <td>{priceFormat(order.pizzas[0].cost)}</td>
                                <td>{formatString(order.pizzas[0].type)}</td>
                                <td>{formatString(order.status)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}