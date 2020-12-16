import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavBar from './NavBar';
import logo from '../../img/PizzaLogo.PNG';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'black'
    },
    backgroundColor: {
        background: 'orange',
    },
    image:{
        flex:1,
        width: 80,
        height: 80,
        resizeMode:'contain'
    }
  }));
  
  export default function ButtonAppBar(props) {
    const classes = useStyles();
    const handleChange = ()=>{
        localStorage.clear();
    }
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
        
            <Toolbar className={classes.backgroundColor}>
                
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><MenuIcon /></IconButton>
                <img className={classes.image} src={logo} alt='Pizza'/>
                <NavBar/> 
                <Link to='/'><Button color="inherit" onClick={handleChange} style={{color:'black'}}>LogOut</Button></Link>
            </Toolbar>
        </AppBar>
      </div>
    );
  }




