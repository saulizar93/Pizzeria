import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch } from 'react-redux';
import {signin} from '../redux/actions';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignIn(props) {

    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    })
    const [response, setResponse] = useState("");

    function handleChange(e){
        setUserCredentials({
            ...userCredentials,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(userCredentials);

        fetch('http://localhost:8080/auth',{
            method: 'POST',
            body: JSON.stringify({
                email:userCredentials.email,
                password:userCredentials.password
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then( (res)=>res.json())
        .then( (res)=>{
            console.log(res)
            if(res.response.includes("Username or password is Invalid")){
                console.log("Wrong input")
                setResponse("Username or password is invalid");
            }else{
                localStorage.setItem("token",res.response);
                localStorage.setItem("isLoggedIn",true);
                dispatch(signin());
                setResponse(res.response);
                props.history.push("/home")
            }
            
        })
        .catch( (err)=>console.log(err))
    }

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{color: 'yellow'}}>
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit} onChange={handleChange} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        style={{ backgroundColor: 'white' }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        style={{ backgroundColor: 'white' }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
                <h6 style={{backgroundColor:'red'}}>{response}</h6>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Container>
    );
}