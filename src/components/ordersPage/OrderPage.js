import React, { useState, useEffect} from 'react';

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
        <div>
            <h1 style={{textAlign:'center'}}> Pizza Orders </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Pizza Type</th>
                        <th>Toppings</th>
                        <th>Height</th>
                        <th>Size</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map( (order)=>{
                        return(
                            <tr key={order._id}>
                                <td>{order.customerIdString}</td>
                                <td>{order.pizzas[0].type}</td>
                                <td>{order.pizzas[0].toppings}</td>
                                <td>{order.pizzas[0].height}</td>
                                <td>{order.pizzas[0].size}</td>
                                <td>{order.pizzas[0].cost}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}