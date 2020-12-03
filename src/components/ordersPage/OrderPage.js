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

    let totalCost = ( (pizzaItem)=>{
        let sum = 0;
        for(let i=0; i<pizzaItem.length;i++){
            sum = sum + pizzaItem[i].cost;
        }
        return sum;
    })

    return(
        <Container>
            <h1 style={{textAlign:'center', fontFamily:'Monaco', fontWeight:'bold'}}> Pizza Orders </h1>
            <Table hover bordered className='table'>
                <thead>
                    <tr style={{backgroundColor:'red'}}> 
                        <th>Customer Name</th>
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
                    {orders.map( (order)=>{
                        return(
                            <tr key={order._id.hexString} style={{backgroundColor:'orange'}}>
                                <td>{formatString(order.customer.firstName)} {formatString(order.customer.lastName)}</td>
                                <td>{order.pizzas.length}</td>
                                <td>
                                    <ol style={{paddingLeft:15}}>
                                        {order.pizzas.map( (pizzaItem)=>{
                                            return(
                                            <li>{formatString(pizzaItem.type)}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    <ol style={{paddingLeft:15}}>
                                        {order.pizzas.map( (pizzaItem)=>{
                                            return(
                                                <li>{formatString(pizzaItem.toppings.toString())}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    <ol style={{paddingLeft:15}}>
                                        {order.pizzas.map( (pizzaItem)=>{
                                            return(
                                                <li>{formatString(pizzaItem.size)}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    <ol style={{paddingLeft:15}}>
                                        {order.pizzas.map( (pizzaItem)=>{
                                            return(
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
        </Container>
    )
}