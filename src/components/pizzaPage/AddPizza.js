import React, {useState} from 'react'
import {Form, FormGroup, Input, Label, Col, Card, Container, Button, CardTitle} from 'reactstrap'
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
        let tops = selectedToppings.map(t=>{
            return t.value;
        })
        let jsonBody = {
            "height": height,
            "type": type,
            "toppings": tops,
            "cost": cost,
            "size": size
        }

        console.log(jsonBody)
        

        fetch('http://localhost:8080/pizzas',{
            method: "POST",
            body: JSON.stringify(jsonBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {res.json();
        }).then(data => {return data})
        .catch((e)=>{return e});
    }

    const handleSizeChange = (e)=>{
        setSize(e.target.value);
    }
    const handleTypeChange = (e)=>{
        setType(e.target.value);
    }

    return (
    <Card style={{marginBottom: "30px"}}>
        <CardTitle tag="h4">Add New Pizza</CardTitle>
        <Container>
            <Form style={{paddingTop: "15px"}}>
                <FormGroup row>
                    <Label for="typeSelect" sm={2}>Crust Type</Label>
                    <Col sm={10}>
                        <Input type="select" name="type" id="typeSelect" value={type} onChange={handleTypeChange}>
                            <option value="CLASSIC">Classic</option>
                            <option value="DEEP_DISH">Deep Dish</option>
                            <option value="SICILIAN">Gluten Free</option>
                            <option value="THIN_CRUST">Thin Crust</option>
                            <option value="SICILIAN">Sicilian</option>
                            <option value="STUFFED">Stuffed</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="sizeSelect" sm={2}>Size</Label>
                    <Col sm={10}>
                        <Input type="select" name="size" id="sizeSelect" value={size} onChange={handleSizeChange}>
                            <option value="SLICE">Slice</option>
                            <option value="PERSONAL">Personal</option>
                            <option value="SMALL">Small</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="LARGE">Large</option>
                            <option value="XLARGE">Extra Large</option>
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