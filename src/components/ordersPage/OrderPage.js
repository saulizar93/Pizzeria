import React, { useState, useEffect} from 'react';
import {Table, Container} from 'reactstrap';
import { priceFormat } from '../util/PriceFormat';
import {formatString} from '../util/StringFormat';
import { NewOrder } from '../ordersPage/NewOrder'
import {Button} from 'reactstrap';

export default function OrderPage(){

    const [orders, setOrders] = useState([]);

    function handleUpdate(order){
        let newStatus = "";
        if(order.status==="PENDING") newStatus="COOKING";
        else if(order.status==="COOKING")newStatus="READY"
        else if(order.status==="READY") newStatus="DELIVERING";
        else if(order.status==="DELIVERING") newStatus="COMPLETED";
        else if(order.status==="COMPLETED") newStatus="PENDING";
        let customerJSON={
            _id:order.customer._id.hexString
        };
        let jsonBody={
            customer: customerJSON,
            pizzeriaId: order.pizzeriaId,
            pizzas:order.pizzas,
            cost:order.cost,
            tip:order.tip,
            status:newStatus,
            type:order.type,
            deliveryAddress:order.deliveryAddress
    
        }
        console.log(jsonBody);
        let id = order._id.hexString;
        fetch(`http://localhost:8080/orders/?_id=${id}`,
        {
            method: "PUT",
            body: JSON.stringify(jsonBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( (response)=>response.json())
        .then( (data)=>{
            console.log(data);
        })
        .catch( (err)=>console.log(err));
    }

    function handleRemove(id){
        console.log("Deleting: "+id);
        fetch(`http://localhost:8080/orders?_id=${id}`,{
            method: "DELETE"
        }).then( (response)=>response.json())
        .then( (data)=>{
            console.log(data);
        })
        .catch( (err)=>console.log(err));
    }

    useEffect( ()=> {
        fetch('http://localhost:8080/orders')
        .then( (response)=> response.json())
        .then( (data)=>{
            setOrders(data);
            //console.log(data);
        })
        .catch( (err)=> console.log(err));
    },[orders])

    let totalCost = ( (pizzaItem)=>{
        let sum = 0;
        for(let i=0; i<pizzaItem.length;i++){
            sum = sum + pizzaItem[i].cost;
        }
        return sum;
    })

    return(
        <div>
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
                        <th></th>
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
                                <td>
                                    {formatString(order.status)}
                                    <br/>
                                    <br/>
                                    <Button color='success' onClick={()=>handleUpdate(order)}>Update</Button>
                                </td>
                                <td><Button color='danger' onClick={()=>handleRemove(order._id.hexString)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
        <NewOrder />
        
        </div>
        
    )
}