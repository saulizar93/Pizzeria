// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PizzaPage from './components/pizzaPage/PizzaPage';
import FilterPizza from './components/pizzaPage/FilterPizza';
import CustomerPage from './components/customerPage/CustomerPage';
import OrderPage from './components/ordersPage/OrderPage';
//import NavBar from './components/navbar/NavBar';
import AppBar from './components/navbar/AppBar';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    {/* <NavBar></NavBar> */}
    <AppBar/>
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/getPizzas' component={PizzaPage} />
      <Route path='/getCustomers' component={CustomerPage} />
      <Route path='/getOrders' component={OrderPage} />
      <Route path='/findPizza' component={FilterPizza}/>
    </Switch>
    
    </div>
  );
}

export default App;
