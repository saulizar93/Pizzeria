import React, {useState, useEffect} from 'react'
import {Form, FormGroup, Input, Label, Col, Card, Container, Button, CardTitle} from 'reactstrap'
import { formatString } from '../util/StringFormat';
import MultiSelect from 'react-multi-select-component'

export const AddPizza = ()=>{
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
        {label: "Jalepeno", value: "JALAPENO"},
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


    const [selectedToppings, setSelectedToppings] = useState([]);
    const [size, setSize] = useState("");
    const [type, setType] = useState("");
    const [height, setHeight] = useState(0);
    const [cost, setCost] = useState(0);

    const handleSubmit = (e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append("height", height);
        formData.append("type", type);
        let tops = selectedToppings.map(t=>{
            return t.value;
        })
        formData.append("toppings", tops);
        formData.append("cost", cost);
        formData.append("size", size);
        //SUBMIT
    }
    return (
    <Card style={{marginBottom: "30px"}}>
        <CardTitle tag="h4">Add New Pizza</CardTitle>
        <Container>
            <Form style={{paddingTop: "15px"}}>
                <FormGroup row>
                    <Label for="typeSelect" sm={2}>Crust Type</Label>
                    <Col sm={10}>
                        <Input type="select" name="type" id="typeSelect">
                            <option>Classic</option>
                            <option>Deep Dish</option>
                            <option>Gluten Free</option>
                            <option>Thin Crust</option>
                            <option>Sicilian</option>
                            <option>Stuffed</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="sizeSelect" sm={2}>Size</Label>
                    <Col sm={10}>
                        <Input type="select" name="size" id="sizeSelect">
                            <option>Slice</option>
                            <option>Personal</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelectMulti" sm={2}>Toppings</Label>
                    <Col sm={10}>
                        <MultiSelect options={toppings} value={selectedToppings} onChange={setSelectedToppings} labelledBy={"Toppings"}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="cost" sm={2}>Cost</Label>
                    <Col sm={10}>
                        <Input type="number" name="cost" id="cost" disabled></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Button color="success" style={{marginLeft: "15px"}} onClick={handleSubmit}>Add Pizza</Button>
                </FormGroup>
            </Form>
        </Container>
    </Card>
    )
}