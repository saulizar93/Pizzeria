import React, { useState } from 'react'
import PhoneAvField, { parsePhoneNumber } from 'react-phone-number-input'
import { Button, Col, Container, FormGroup, Label } from 'reactstrap'
import 'react-phone-number-input/style.css'
import { AvField, AvForm} from 'availity-reactstrap-validation'
import { states } from '../util/states'

export const CustomerForm = ()=>{

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const [phone, setPhone] = useState("");
    

    const validateForm = (e)=>{
        let address = generateAddress();
        let customer = {
            firstName: fName,
            lastName: lName,
            phoneNum: parsePhoneNumber(phone).number,
            homeAddress: address,
            email: email,
            password: pass,
            card: null
        }
        console.log(customer);
        //submit the form
    }

    const generateAddress = ()=>{
        let address = {
            streetAddress: address1,
            streetAddressLine2: address2,
            city: city,
            state: state,
            postal: zip
        }
        return address;
    }

    const handleFormChange = (e)=>{
        const value = e.target.value;
        switch(e.target.name){
            case "firstName": setFname(value); break;
            case "lastName": setLname(value); break;
            case "email": setEmail(value); break;
            case "password": setPass(value); break;
            case "confirmPassword": setConfPass(value); break;
            case "address1": setAddress1(value); break;
            case "address2": setAddress2(value); break;
            case "city": setCity(value); break;
            case "state": setState(value); break;
            case "zip": setZip(value); break;
            default: break;
        }
    }
    return (
        <Container>
        <AvForm>
            <FormGroup row>
                <Label sm={2} for='first'>First Name</Label>
                <Col sm={4}>
                    <AvField id='first' type='text' name='firstName' value={fName} onChange={handleFormChange} validate={{
                        required: {value: true}
                    }}></AvField>
                </Col>
                <Label sm={2} for='last'>Last Name</Label>
                <Col sm={4}>
                    <AvField id='last' type='text' name='lastName' value={lName} onChange={handleFormChange} validate={{
                        required: {value: true}
                    }}></AvField>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='email'>Email</Label>
                <Col sm={10}>
                    <AvField id='email' type='text' name='email' value={email} onChange={handleFormChange} validate={{
                        required: {value: true},
                        email: true
                    }}></AvField>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='password'>Password</Label>
                <Col sm={4}>
                    <AvField id='password' type='password' name='password' value={pass} onChange={handleFormChange} validate={{
                        required: {value: true},
                        minLength: {value: 6, errorMessage: "Password must be between 6 and 16 characters"},
                        maxLength: {value: 16, errorMessage: "Password must be between 6 and 16 characters"}
                    }}></AvField>
                </Col>
                <Label sm={2} for='confirmPassword'>Confirm Password</Label>
                <Col sm={4}>
                    <AvField id='confirmPassword' type="password" name='confirmPassword' value={confPass} onChange={handleFormChange} validate={{
                        required: {value: true},
                        match: {value: 'password', errorMessage: "Passwords do not match"},
                        minLength: {value: 6, errorMessage: "Password must be between 6 and 16 characters"},
                        maxLength: {value: 16, errorMessage: "Password must be between 6 and 16 characters"}
                    }}></AvField>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='address1'>Home Address Line 1</Label>
                <Col sm={10}>
                    <AvField id='address1' type='text' name='address1' value={address1} onChange={handleFormChange} validate={{
                        required: {value: true},
                        pattern: {value: '^[^- ][A-Za-z0-9 ]+$'}
                    }}></AvField>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='address2'>Home Address Line 2</Label>
                <Col sm={10}>
                    <AvField id='address2' type='text' name='address2' value={address2} onChange={handleFormChange} validate={{
                        pattern: {value: '^[A-Za-z0-9 ]+$'}
                    }}></AvField>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='city'>City</Label>
                <Col sm={2}>
                    <AvField id='city' type='text' name='city' value={city} onChange={handleFormChange} validate={{
                        required: {value: true},
                        pattern: {value: '^[A-Za-z0-9 ]+$'}
                    }}></AvField>
                </Col>
                <Label sm={2} for='state'>State</Label>
                <Col sm={2}>
                    <AvField type='select' id='state' name='state' value={state} onChange={handleFormChange} required>
                        {states.map(s=>{
                            return <option key={s.abv} value={s.abv}>{s.name}</option>
                        })}
                    </AvField>
                </Col>
                <Label sm={2} for='zip'>Zip Code</Label>
                <Col sm={2}>
                    <AvField type='text' id='zip' name='zip' maxLength='5' value={zip} onChange={handleFormChange} validate={{
                        required: {value: true},
                        number: true,
                        min: {value: '01000', errorMessage: "Invalid Zip Code"},
                        minLength: {value: 5},
                        maxLength: {value: 5},
                        max: {value: '99999', errorMessage: "Invalid Zip Code"},
                    }}></AvField>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='phone'>Phone Number</Label>
                <Col sm={10}>
                    <PhoneAvField defaultCountry="US" value={phone} onChange={setPhone} required></PhoneAvField>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Button color='success' style={{marginLeft: '15px'}} onClick={validateForm}>Create Customer</Button>
            </FormGroup>
        </AvForm>
        </Container>
    );
}