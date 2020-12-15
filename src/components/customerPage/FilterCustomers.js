import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Table} from 'reactstrap';
import { formatString } from '../util/StringFormat';

export default function FilterCustomers(){

    const [filterBy, setFilterBy] = useState("");
    const [value, setValue] = useState("");
    const [ filteredCustomers, setFilteredCustomers]= useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("FilterBy: "+filterBy);
        console.log("Value: "+value);
        let jsonBody={};
        if(filterBy==="city"){
            let innerJSON={};
            innerJSON[filterBy]=value;
            jsonBody["homeAddress"]=innerJSON;
        }else{
            jsonBody[filterBy]=value;
        }

        fetch('http://localhost:8080/customers/examples',{
            method: "POST",
            body: JSON.stringify(jsonBody),
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then( (response)=> response.json())
        .then( (data)=> {
            setFilteredCustomers(data);
            console.log(data);
        })
        .catch( (err)=>console.log(err));
    }

    const handleFilterChange = (e)=>{
        setFilterBy(e.target.value);
    }
    const handleValueChange = (e)=>{
        setValue(e.target.value);
    }

    let form;
    if(filterBy==="firstName" || filterBy==="lastName"){
        form=<FormGroup row>
            <Label sm={2} for="value" style={{textAlign:'center', fontFamily:'Monaco',fontWeight:'bold',backgroundColor:'orange'}}>Value</Label>
            <Col sm={2}>
                <Input placeholder="Enter Name" label="Input First Name" type="text" name="value" id="value" value={value} onChange={handleValueChange}>

                </Input>
            </Col>
        </FormGroup>
    }
    else if(filterBy==="email"){
        form=<FormGroup row>
            <Label sm={2} for="value" style={{textAlign:'center', fontFamily:'Monaco',fontWeight:'bold',backgroundColor:'orange'}}>Value</Label>
            <Col sm={2}>
                <Input placeholder="Enter Email" label="Input Email" type="email" name="value" id="value" value={value} onChange={handleValueChange}>

                </Input>
            </Col>
        </FormGroup>
    }
    else if(filterBy==="phoneNum"){
        form=<FormGroup row>
            <Label sm={2} for="value" style={{textAlign:'center', fontFamily:'Monaco',fontWeight:'bold',backgroundColor:'orange'}}>Value</Label>
            <Col sm={2}>
                <Input placeholder="Enter PhoneNum" label="Input Phone Number" type="number" name="value" id="value" value={value} onChange={handleValueChange}>

                </Input>
            </Col>
        </FormGroup>
    }
    else if(filterBy==="city"){
        form=<FormGroup row>
            <Label sm={2} for="value" style={{textAlign:'center', fontFamily:'Monaco',fontWeight:'bold',backgroundColor:'orange'}}>Value</Label>
            <Col sm={2}>
            <Input type="select" name="city" id="city" value={value} onChange={handleValueChange}>
                                <option value="Arlington">Arlington</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="San Diego">San Diego</option>
                                <option value="El Paso">El Paso</option>
                            </Input>
            </Col>
        </FormGroup>
    }
    return(
        // <Card>
        //     <CardTitle tag="h1" style={{textAlign:'center', fontFamily:'Monaco', fontWeight:'bold'}}>Find Customer</CardTitle>
        //     <Container>
        <div>
            <br/>
            <br/>
                <Form>
                    <FormGroup row>
                        <Label sm={2} for='filterBy' style={{ textAlign: 'center', fontFamily: 'Monaco', fontWeight: 'bold', backgroundColor: 'orange' }}>Filter By</Label>
                        <Col sm={2}>
                            <Input type="select" name="filterBy" id="filterBy" value={filterBy} onChange={handleFilterChange}>
                                <option value="firstName">First Name</option>
                                <option value="lastName">Last Name</option>
                                <option value="email">Email</option>
                                <option value="phoneNum">Phone Number</option>
                                <option value="city">City</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    {form}
                    <FormGroup row>
                        <Button color="danger" style={{marginLeft: "300px"}} onClick={handleSubmit}>Find Customer</Button>
                    </FormGroup>
                    <Table hover bordered className='table'>
                        <thead>
                            <tr style={{backgroundColor:'red'}}>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Street Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip Code</th>
                                <th>Favorite Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCustomers.map( (customer)=>{
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
                </Form>
            {/* </Container>
        </Card> */}
        </div>
    )
}