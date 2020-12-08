import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Card, Col, CardTitle, Container, FormGroup, Table} from 'reactstrap'
import React, { useState, useEffect } from 'react'
import { AddPizza } from '../pizzaPage/AddPizza'
import PhoneAvField from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export const NewOrder = (props)=>{

    const customerData = null//{/*get customer data*/}
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [pizzaList, setPizzaList] = useState([]);

    useEffect(()=>{
        setPizzaList([...pizzaList, {
            height: 0.5,
            cost: 12,
            size: "MEDIUM",
            toppings: ["BACON", "CHEESE"],
            type: "CLASSIC"
        }]);
    },[])

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
                            <PhoneAvField name="phone" defaultCountry="US" label="Phone" disabled={(customerData ? true : false)} value={(customerData ? customerData.phone : phone)}></PhoneAvField>
                        </Col>
                    </FormGroup>
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
                            {pizzaList.forEach((p,i)=>{
                                console.log(p);
                                return (
                                    <tr>
                                        <td>{i}</td>
                                        <td>{p.size}</td>
                                        <td>{p.type}</td>
                                        <td>{p.toppings}</td>
                                        <td>{p.cost}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <AddPizza />
                </AvForm>
            </Container>
        </Card>
    )
}