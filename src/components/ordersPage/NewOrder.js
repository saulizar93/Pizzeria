import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Button, Card, Col, CardTitle, Container, Form, Input, FormGroup, Table, Label} from 'reactstrap'
import React, { useState } from 'react'
import MultiSelect from 'react-multi-select-component'
import {priceFormat} from '../util/PriceFormat'
import {calculateCost} from '../util/calculateCost'
import {formatString} from '../util/StringFormat'
import PhoneAvField from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import CurrencyInput from 'react-currency-input'
import { states } from '../util/states'
import { toppings } from '../util/toppings'
import jwt_decode from 'jwt-decode'
import { heightCheck } from '../util/heightCheck'

export const NewOrder = (props)=>{
    
    const [id, setId] = useState("")
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [orderType, setOrderType] = useState("DELIVERY")
    const [subtotal, setSubtotal] = useState(0)
    const [tip, setTip] = useState(0)
    const [pizzaList, setPizzaList] = useState([])

    const [selectedToppings, setSelectedToppings] = useState([]);
    const [size, setSize] = useState("SLICE");
    const [type, setType] = useState("CLASSIC");
    
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");


    const handleFormChange = (e)=>{
        const value = e.target.value;
        switch(e.target.name){
            case "fname": setFname(value); break;
            case "lname": setLname(value); break;
            case "email": setEmail(value); break;
            case "add1": setAddress1(value); break;
            case "add2": setAddress2(value); break;
            case "city": setCity(value); break;
            case "state": setState(value); break;
            case "zip": setZip(value); break;
            default: break;
        }
    }
        const body = jwt_decode(localStorage.getItem("token"))["sub"];
        const customerData = fetch(`http://ec2-3-140-190-217.us-east-2.compute.amazonaws.com:8081/customers/email?email=${body}`,{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then( (response) => {
                return response.json()
            })
            .then((dat)=>{
                setFname(dat.firstName)
                setLname(dat.lastName)
                setPhone(dat.phoneNum)
                setEmail(dat.email)
                setAddress1(dat.homeAddress.streetAddress)
                setAddress2(dat.homeAddress.streetAddressLine2)
                setCity(dat.homeAddress.city)
                setState(states.find((x)=>x.name===dat.homeAddress.state).abv)
                setZip(dat.homeAddress.postal)
                setId(dat._id.hexString)
            })
            .catch( (err)=>console.log(err));
        

        //

    // const customerData = {
    //     _id: "5fd272c428bd5f10a16f09c7",
    //     email: "Jeff@pizza.com",
    //     fName: "Jeff",
    //     lName: "Jeffson",
    //     phone: "+1(231)2312345",
    //     address: {
    //         streetAddress: "123 West st",
    //         streetAddressLine2: " ",
    //         city: "Arlington",
    //         state: "TX",
    //         zip: "04063"
    //     },
    // }

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

    const subtractSubtotal = (c)=>{
        console.log(c)
        setSubtotal(Math.abs(subtotal - c))
    }
    let price = calculateCost(type, size, selectedToppings);

    const submitOrder = (e)=>{
        e.preventDefault()
        let order = {
            customer: customerData ? 
            { _id: id } : null,
            pizzeriaId: null,
            pizzas: pizzaList,
            cost: subtotal,
            tip: tip,
            status: null,
            type: orderType,
            deliveryAddress: (orderType==="DELIVERY" || orderType==="CATERING") ? {  
                streetAddress:      address1,
                streetAddressLine2: address2,
                city:               city,
                state:              state,
                postal:             zip
            } : null
        }

        fetch('http://ec2-3-140-190-217.us-east-2.compute.amazonaws.com:8081/orders',{
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {res.json();
        }).then(data => {return data})
        .catch((e)=>{return e});
        console.log(order)
    }

    const typeChange = (e)=>{
        setOrderType(e.target.value)
        if(e.target.value==="DELIVERY" || e.target.value==="CATERING")
            showDelivery(true);
        else showDelivery(false)
    }

    const showDelivery = (p)=>{
        document.getElementById("address").hidden = !p
    }

    const changeTip = (e, maskedValue)=>{
        setTip(maskedValue)
    }
        
    return(
        <Card style={{backgroundColor:'orange', padding: '10px', margin: '15px', opacity: 0.98}}>
            <h3 style={{textAlign:'center', fontFamily:'Monaco', fontWeight:'bold', backgroundColor:'red'}}>Create New Order</h3>
            <Container>
                <AvForm>
                    <FormGroup row>
                        <Col sm={6}>
                            <AvField name="fname" label="First Name" onChange={handleFormChange} disabled={(customerData ? true : false)} value={(customerData.firstName ? customerData.firstName : fName)} ></AvField>
                        </Col>
                        <Col sm={6} >
                            <AvField name="lname" label="Last Name" onChange={handleFormChange} disabled={(customerData ? true : false)} value={(customerData.lastName ? customerData.lastName : lName)}></AvField>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={6} >
                            <AvField name="email" label="Email" onChange={handleFormChange} disabled={(customerData ? true : false)} value={(customerData.email ? customerData.email : email)}></AvField>
                        </Col>
                        <Col sm={6} >
                            <Label for="phone">Phone</Label>
                            <PhoneAvField name="phone" id="phone" defaultCountry="US" onChange={setPhone} disabled={(customerData ? true : false)} value={(customerData.phoneNum ? customerData.phoneNum : phone)}></PhoneAvField>
                        </Col>
                    </FormGroup>
                    <FormGroup row check>
                        <Col>
                            <Label sm={3} check>
                                <Input onChange={typeChange} defaultChecked type="radio" name="radio1" value="DELIVERY"/>{' '}
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
                    <div id="address" row>
                        <FormGroup row>
                            <Col sm={12}>
                            <AvField type="text" name="add1" id="add1" label="Address Line 1" onChange={handleFormChange} disabled={(customerData ? true : false)} value={(customerData.homeAddress ? customerData.homeAddress.streetAddress : address1)}></AvField>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={12}>
                            <AvField type="text" name="add2" id="add2" label="Address Line 2" onChange={handleFormChange} disabled={(customerData ? true : false)} value={(customerData.homeAddress ? customerData.homeAddress.streetAddressLine2 : address2)}></AvField>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col sm={4} >
                        <AvField type="text" name="city" id="city" label="City" onChange={handleFormChange} disabled={(customerData ? true : false)} value={(customerData.homeAddress ? customerData.homeAddress.city : city)}></AvField>
                        </Col>
                        <Col sm={4}>
                        <AvField type='select' id='state' label="State" name='state' disabled={(customerData ? true : false)} value={(customerData.homeAddress ? customerData.homeAddress.state : state)} onChange={handleFormChange}>
                        {states.map(s=>{
                            return <option key={s.abv} value={s.abv}>{s.name}</option>
                        })}
                        </AvField>
                        </Col>
                        <Col sm={4}>
                            <AvField type='text' id='zip' name='zip' label="Zip Code" maxLength='5' disabled={(customerData ? true : false)} value={(customerData.homeAddress ? customerData.homeAddress.zip : zip)} onChange={handleFormChange}></AvField>
                        </Col>
                        </FormGroup>
                    </div>

                    <br />

                    <Card style={{marginBottom: "30px"}}>
                    <CardTitle tag="h4" style={{textAlign:'center', fontFamily:'Monaco', fontWeight:'bold', backgroundColor:'red'}}>Add Pizza(s) to Order</CardTitle>
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
                                <Button color="danger" style={{marginLeft: "15px"}} onClick={handleSubmit}>Add Pizza</Button>
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
                                        <td><Button color='danger' value={p} onClick={e=>{
                                            pizzaList.splice(pizzaList.indexOf(e.target.value),1)
                                            subtractSubtotal(p.cost) 
                                        }}> x </Button></td>
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
                    <Button color='danger' type="submit" onClick={submitOrder}>Submit Order</Button>
                </AvForm>
            </Container>
        </Card>
    )
}