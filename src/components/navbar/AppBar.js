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
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
        
            <Toolbar className={classes.backgroundColor}>
                
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><MenuIcon /></IconButton>
                <img className={classes.image} src={logo} alt='Pizza'/>
                {/* <Typography variant="h6" className={classes.title}></Typography> */}
                <NavBar/> 
                <Link to='/login'><Button color="inherit" style={{color:'black'}}>LogIn</Button></Link>
            </Toolbar>
        </AppBar>
      </div>
    );
  }




