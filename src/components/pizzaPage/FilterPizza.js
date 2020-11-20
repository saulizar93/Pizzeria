import React, {useState} from 'react';
import {Button, Card, CardTitle, Col, Container, Form, FormGroup, Input, Label, Table} from 'reactstrap';
import { formatString } from '../util/StringFormat';
import { priceFormat } from '../util/PriceFormat';
import MultiSelect from 'react-multi-select-component';

export default function FilterPizza(){

    const [filterBy, setFilterBy] = useState("");
    const [value, setValue] = useState("");
    const [filteredPizza, setFilteredPizza] = useState([]);
    const [selectedToppings, setSelectedToppings] = useState([]);

    const toppings = [
        {label: "Anchovy", value: "ANCHOVY"},
        {label: "Artichoke", value: "ARTICHOKE"},
        {label: "Bacon", value: "BACON"},
        {label: "Basil", value: "BASIL"},
        {label: "Broccoli", value: "BROCCOLI"},
        {label: "Cheese", value: "CHEESE"},
        {label: "Carrot", value: "CARROT"},
        {label: "Chicken", value: "CHICKEN"},
        {label: "Cilantro", value: "CILANTRO"},
        {label: "Crouton", value: "CROUTON"},
        {label: "Garlic", value: "GARLIC"},
        {label: "Ham", value: "HAM"},
        {label: "Jalapeño", value: "JALAPENO"},
        {label: "Lettuce", value: "LETTUCE"},
        {label: "Meatball", value: "MEATBALL"},
        {label: "Mushroom", value: "MUSHROOM"},
        {label: "Olive", value: "OLIVE"},
        {label: "Onion", value: "ONION"},
        {label: "Oregano", value: "OREGANO"},
        {label: "Pasta", value: "PASTA"},
        {label: "Pepper", value: "PEPPER"},
        {label: "Pepperoni", value: "PEPPERONI"},
        {label: "Pineapple", value: "PINEAPPLE"},
        {label: "Sausage", value: "SAUSAGE"},
        {label: "Salami", value: "SALAMI"},
        {label: "Spinach", value: "SPINACH"},
        {label: "Tomato", value: "TOMATO"}
    ]

    const handleSubmit = (e)=>{
        e.preventDefault();
        // const field = `"${filterBy}"`;
        // const fieldValue = `"${value}"`;
        console.log("Filter By: ",filterBy);
        console.log("Value: ",value);
        console.log("Selected Toppings: ", selectedToppings);
        let jsonBody={};
        if(selectedToppings.length===0 && value==="") return "No Input";
        if(selectedToppings.length>0){
            let tops = selectedToppings.map(t=> t.value);
            jsonBody[filterBy]=tops;
        }else{
            jsonBody[filterBy]=value;
        }
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

    let form;
    if(filterBy==="height" || filterBy==="cost"){
        form= <FormGroup row>
        <Label sm={2} for="value">Value</Label>
        <Col sm={2}>
            <Input placeholder="Enter amount" label="Input height" type="number" name="value" id="value" value={value} onChange={handleValueChange}>
            </Input>
        </Col>
        </FormGroup>
    }
    else if(filterBy==="type"){
        form= <FormGroup row>
            <Label sm={2} for="value">Value</Label>
                <Col sm={2}>
                    <Input type="select" name="value" id="value" value={value} onChange={handleValueChange}>
                        <option value="CLASSIC">Classic</option>
                        <option value="DEEP_DISH">Deep Dish</option>
                        <option value="GLUTEN_FREE">Gluten Free</option>
                        <option value="THIN_CRUST">Thin Crust</option>
                        <option value="SICILIAN">Sicilian</option>
                        <option value="STUFFED">Stuffed</option>
                    </Input>
                </Col>
            </FormGroup>
    }

    else if(filterBy==="size"){
        form= <FormGroup row>
            <Label sm={2} for="value">Value</Label>
                <Col sm={2}>
                    <Input type="select" name="value" id="value" value={value} onChange={handleValueChange}>
                        <option value="SLICE">Slice</option>
                        <option value="PERSONAL">Personal</option>
                        <option value="SMALL">Small</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="LARGE">Large</option>
                        <option value="XLARGE">Extra Large</option>
                    </Input>
                </Col>
            </FormGroup>
    }
    else if(filterBy==="toppings"){
        form= <FormGroup row>
            <Label sm={2} for="value">Value</Label>
                <Col sm={10}>
                    <MultiSelect options={toppings} value={selectedToppings} onChange={setSelectedToppings} labelledBy={"Toppings"}/>
                </Col>
            </FormGroup>
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
                    {form}
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

