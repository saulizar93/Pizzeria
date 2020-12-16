import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PizzaPage from './components/pizzaPage/PizzaPage';
import FilterPizza from './components/pizzaPage/FilterPizza';
import CustomerPage from './components/customerPage/CustomerPage';
import OrderPage from './components/ordersPage/OrderPage';
import LoginPage from './components/loginPage/LoginPage';
import AppBar from './components/navbar/AppBar';
import backgroundImage from './img/PizzaBackground.png';
import FilterOrders from './components/ordersPage/FilterOrders';
import FilterCustomers from './components/customerPage/FilterCustomers';
import { NewOrder } from './components/ordersPage/NewOrder';
import {useSelector} from 'react-redux';


function App() {

  const isLogged = useSelector(state=>state.isLogged);
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}}>
    {isLogged?<AppBar/>:null}
    {/* <AppBar/> */}
    <Switch>
      <Route path='/' component={LoginPage} exact />
      <Route path='/home' component={HomePage} exact />
      <Route path='/getPizzas' component={PizzaPage} exact/>
      <Route path='/getCustomers' component={CustomerPage} exact/>
      <Route path='/findCustomers' component={FilterCustomers} exact/>
      <Route path='/getOrders' component={OrderPage} exact/>
      <Route path='/findPizza' component={FilterPizza} exact/>
      <Route path='/findOrders' component={FilterOrders} exact/>
      <Route path='/newOrder' component={NewOrder} exact />
      <Route path='/**' component={()=><h1 style={{textAlign:'center'}}>404 not found</h1>}/>
    </Switch>
    </div>
  );
}

export default App;
