import { Card } from '@material-ui/core';
import React, { useState, useEffect} from 'react';
import {Table, Container} from 'reactstrap';
import { formatString } from '../util/StringFormat';
import { CustomerForm } from './CustomerForm';

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
        <Container>
            <h1 style={{textAlign:'center', fontFamily:'Monaco', fontWeight:'bold'}}> List of Customers </h1>
            <Table hover bordered className='table'>
                <thead>
                    <tr style={{backgroundColor:'red'}}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Street Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Favorite Order</th>

                    </tr>
                </thead>
                <tbody>
                    {customers.map( (customer)=>{
                        return(
                            <tr key={customer._id.hexString} style={{backgroundColor:'orange'}}>
                                <td>{customer.firstName} {customer.lastName}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneNum}</td>
                                <td>{customer.homeAddress.streetAddress}</td>
                                <td>{customer.homeAddress.city}</td>
                                <td>{customer.homeAddress.state}</td>
                                <td>{customer.homeAddress.postal}</td>
                                <td>
                                    <ol style={{paddingLeft:15}}>
                                    {customer.favoriteOrder.map( (favOrder)=>{
    
                                    return(
                                        <li>{formatString(favOrder.type)}</li>
                                    )
                                    })}
                                    </ol>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </Table>

            <Card><br/><CustomerForm /></Card>
        </Container>
    )
}