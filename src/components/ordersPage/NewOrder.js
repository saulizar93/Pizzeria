import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Button, Card, Col, CardTitle, Container, Form, Input, FormGroup, Table, Label} from 'reactstrap'
import React, { useState, useEffect } from 'react'
import MultiSelect from 'react-multi-select-component'
import {priceFormat} from '../util/PriceFormat'
import {calculateCost} from '../util/calculateCost'
import {formatString} from '../util/StringFormat'
import { AddPizza } from '../pizzaPage/AddPizza'
import PhoneAvField from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import CurrencyInput from 'react-currency-input'

export const NewOrder = (props)=>{

    const customerData = null
    // const customerData = {
    //     fName: "Saul",
    //     lName: "Ojeda",
    //     phone: '+12392493021',
    //     email: 'saul.ojeda@infosys.com'
    // }//{/*get customer data*/}
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [orderType, setOrderType] = useState("")
    const [subtotal, setSubtotal] = useState(0)
    const [tip, setTip] = useState(0)
    const [pizzaList, setPizzaList] = useState([])

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
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [size, setSize] = useState("SLICE");
    const [type, setType] = useState("CLASSIC");

    const handleSubmit = (e)=>{
        e.preventDefault();
        let tops = selectedToppings.map(t=>{
            return t.value;
        })
        let height = heightCheck(type);
        let jsonBody = {
            "height": height,
            "type": type,
            "toppings": tops,
            "cost": price,
            "size": size
        }
        setPizzaList([...pizzaList, jsonBody])
        setSubtotal(subtotal + price)
    }

    const handleSizeChange = (e)=>{
        setSize(e.target.value);
    }
    const handleTypeChange = (e)=>{
        setType(e.target.value);
    }

    const heightCheck = (type)=>{
        switch(type){
            case "CLASSIC":
                return 0.75
            case "THIN_CRUST":
                return 0.5
            case "DEEP_DISH":
                return 3
            case "SICILIAN":
                return 1.5
            case "STUFFED":
                return 2
            case "GLUTEN_FREE":
                return 0.5
            default:
                return 0
        }
    }

    let price = calculateCost(type, size, selectedToppings);

    const submitOrder = (e)=>{
        e.preventDefault()
        let data = {
            customer: {
                _id: customerData ? customerData.id : 0,
            },
            pizzeriaId: null,
            pizzas: pizzaList,
            cost: subtotal,
            tip: tip,
            status: null,
            type: orderType,
            deliveryAddress: type==="DELIVERY" ? {  
                streetAddress:      customerData ? customerData.streetAddress : "",
                streetAddressLine2: customerData ? customerData.streetAddressLine2 : "",
                city:               customerData ? customerData.city : "",
                state:              customerData ? customerData.state : "",
                postal:             customerData ? customerData.zip : ""
            } : null
        }

        fetch('http://localhost:8080/orders',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {res.json();
        }).then(data => {return data})
        .catch((e)=>{return e});
        console.log(data)
    }

    const typeChange = (e)=>{
        setOrderType(e.target.value)
    }

    const changeTip = (e, maskedValue)=>{
        setTip(maskedValue)
    }
        
    return(
        <Card>
            <CardTitle>Create New Order</CardTitle>
            <Container>
                <AvForm>
                    <FormGroup row>
                        <Col sm={6}>
                            <AvField name="fname" label="First Name" disabled={(customerData ? true : false)} value={(customerData ? customerData.fName : fName)}></AvField>
                        </Col>
                        <Col sm={6}>
                            <AvField name="lname" label="Last Name" disabled={(customerData ? true : false)} value={(customerData ? customerData.lName : lName)}></AvField>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={6}>
                            <AvField name="email" label="Email" disabled={(customerData ? true : false)} value={(customerData ? customerData.email : email)}></AvField>
                        </Col>
                        <Col sm={6}>
                            <Label for="phone">Phone</Label>
                            <PhoneAvField name="phone" id="phone" defaultCountry="US" onChange={setPhone} disabled={(customerData ? true : false)} value={(customerData ? customerData.phone : phone)}></PhoneAvField>
                        </Col>
                    </FormGroup>

                    <FormGroup row check>
                        <Col>
                            <Label sm={3} check>
                                <Input onChange={typeChange} type="radio" name="radio1" value="DELIVERY"/>{' '}
                                Delivery
                            </Label>
                            <Label sm={3}  check>
                                <Input onChange={typeChange} type="radio" name="radio1" value="PICKUP"/>{' '}
                                Pickup
                            </Label>
                            <Label sm={3} check>
                                <Input onChange={typeChange} type="radio" name="radio1" value="DINE_IN" />{' '}
                                Dine In
                            </Label>
                            <Label sm={3} check>
                                <Input onChange={typeChange} type="radio" name="radio1" value="CATERING" />{' '}
                                Catering
                            </Label>
                        </Col>
                    </FormGroup>

                    <br />

                    <Card style={{marginBottom: "30px"}}>
                    <CardTitle tag="h4">Add Pizza(s) to Order</CardTitle>
                    <Container>
                        <Form style={{paddingTop: "15px"}}>
                            <FormGroup row>
                                <Label for="typeSelect" sm={2}>Crust Type</Label>
                                <Col sm={10}>
                                    <Input type="select" name="type" id="typeSelect" value={type} onChange={handleTypeChange}>
                                        <option value="CLASSIC">Classic</option>
                                        <option value="DEEP_DISH">Deep Dish</option>
                                        <option value="GLUTEN_FREE">Gluten Free</option>
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
                                    <Input type="text" name="cost" id="cost" disabled value={priceFormat(price)}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Button color="success" style={{marginLeft: "15px"}} onClick={handleSubmit}>Add Pizza</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                    </Card>

                    <Table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Size</th>
                                <th>Crust</th>
                                <th>Toppings</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pizzaList.map((p,i)=>{
                                return (
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{formatString(p.size)}</td>
                                        <td>{formatString(p.type)}</td>
                                        <td>{p.toppings.map(t=>{
                                            return formatString(t)+" "
                                        })}</td>
                                        <td>{priceFormat(p.cost)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <FormGroup row>
                        <Col>
                            <Label sm={4}>Subtotal <Input disabled id="sub" value={priceFormat(subtotal)}></Input></Label>
                            <Label sm={4} for="tip">Tip <CurrencyInput id="tip" prefix="$" value={tip} onChange={changeTip}></CurrencyInput></Label>
                            <Label sm={4} for="total">Total <Input id="total" disabled value={priceFormat(Number(subtotal)+Number(tip))}></Input></Label>
                        </Col>
                    </FormGroup>
                    <Button type="submit" onClick={submitOrder}>Submit Order</Button>
                </AvForm>
            </Container>
        </Card>
    )
}