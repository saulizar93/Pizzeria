import React, {useState} from 'react';
import {Button, Card, CardTitle, Col, Container, Form, FormGroup, Input, Label, Table} from 'reactstrap';
import { formatString } from '../util/StringFormat';
import { priceFormat } from '../util/PriceFormat';

export default function FilterPizza(){

    const [filterBy, setFilterBy] = useState("");
    const [value, setValue] = useState("");
    const [filteredPizza, setFilteredPizza] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        // const field = `"${filterBy}"`;
        // const fieldValue = `"${value}"`;
        console.log("Filter By: ",filterBy);
        console.log("Value: ",value);
        let jsonBody = {};
        jsonBody[filterBy]=value;
        console.log(jsonBody)

        fetch('http://localhost:8080/pizzas/examples',{
            method: "POST",
            body: JSON.stringify(jsonBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( (response) => response.json())
        .then( (data)=> {
            setFilteredPizza(data);
            console.log("Here is the data:")
            console.log(data)
        })
        .catch( (err)=> console.log(err));
    }

    const handleFilterChange = (e)=>{
        setFilterBy(e.target.value);
    }
    const handleValueChange = (e)=>{
        setValue(e.target.value);
    }

    return(
        <Card>
            <CardTitle tag="h4">Filter Pizza By</CardTitle>
            <Container>
                <Form>
                    <FormGroup row>
                        <Label sm={2} for="filterBy">Filter By</Label>
                        <Col sm={2}>
                            <Input type="select" name="filterBy" id="filterBy" value={filterBy} onChange={handleFilterChange}>  
                                <option value="height">Height</option>
                                <option value="type">Type</option>
                                <option value="toppings">Toppings</option>
                                <option value="cost">Cost</option>
                                <option value="size">Size</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2} for="value">Value</Label>
                        <Col sm={2}>
                            <Input type="text" name="value" id="value" value={value} onChange={handleValueChange}>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Button color="success" style={{marginLeft: "15px"}} onClick={handleSubmit}>Find Pizza</Button>
                    </FormGroup>
                </Form>
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
                    {filteredPizza.map( (filtered) => {
                        return(
                            <tr key={filtered._id.hexString}>
                                <td>{filtered.height}</td>
                                <td>{formatString(filtered.type)}</td>
                                <td>{formatString(filtered.toppings.toString())}</td>
                                <td>{priceFormat(filtered.cost)}</td>
                                <td>{formatString(filtered.size)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            </Container>
        </Card>
    )
}

