import React, { useState, useEffect} from 'react';

export default function CustomerPage(){

    const [customers, setCustomers] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/customers')
        .then( (response) => response.json())
        .then( (data)=> {
            setCustomers(data);
            console.log(data);
        })
        .catch( (err)=> console.log(err));
    },[])
    return(
        <div>
            <h1 style={{textAlign:'center'}}> List of Customers </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Street Address</th>
                        <th>Street City</th>
                        <th>Street State</th>
                        <th>Zip Code</th>
                        <th>Credit Card Number</th>
                        <th>Favorite Order</th>

                    </tr>
                </thead>
                <tbody>
                    {customers.map( (customer)=>{
                        return(
                            <tr key={customer._id}>
                                <td>{customer.email}</td>
                                <td>{customer.phoneNum}</td>
                                <td>{customer.address.streetAddress}</td>
                                <td>{customer.address.city}</td>
                                <td>{customer.address.state}</td>
                                <td>{customer.address.postal}</td>
                                <td>{customer.card.cardNumber}</td>
                                <td>{customer.favorite}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}