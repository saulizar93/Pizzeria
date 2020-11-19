import React, { useState, useEffect} from 'react';
import { Container, Table } from 'reactstrap';
import { priceFormat } from '../util/PriceFormat';
import { formatString } from '../util/StringFormat';
import { AddPizza } from './AddPizza';

export default function PizzaPage(){

    const [pizza, setPizza] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/pizzas')
        .then( (response) => response.json())
        .then( (data)=> {
            setPizza(data);
            //console.log(data);
        })
        .catch( (err)=> console.log(err));
    }, [])
    return(
        <Container>
            <h1 style={{textAlign:'center'}}> List of Pizzas </h1>
            <Table bordered hover className='table'>
                <thead>
                    <tr>
                        <th>Height</th>
                        <th>Type</th>
                        <th>Toppings</th>
                        <th>Cost</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    {pizza.map( (pizz) =>{
                        return(
                            <tr key={pizz._id.hexString}>
                                <td>{pizz.height}</td>
                                <td>{formatString(pizz.type)}</td>
                                <td>{formatString(pizz.toppings.toString())}</td>
                                <td>{priceFormat(pizz.cost)}</td>
                                <td>{formatString(pizz.size)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <AddPizza />
        </Container>

    )
}