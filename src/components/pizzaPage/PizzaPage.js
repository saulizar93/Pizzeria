import React, { useState, useEffect} from 'react';

export default function PizzaPage(){

    const [pizza, setPizza] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/pizza/getPizza')
        .then( (response) => response.json())
        .then( (data)=> {
            setPizza(data);
            console.log(data);
        })
        .catch( (err)=> console.log(err));
    }, [])
    return(
        <div>
            <table className='table'>
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
                            <tr key={pizz._id}>
                                <td>{pizz.height}</td>
                                <td>{pizz.type}</td>
                                <td>{pizz.toppings}</td>
                                <td>{pizz.cost}</td>
                                <td>{pizz.size}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}