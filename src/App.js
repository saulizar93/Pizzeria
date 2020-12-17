import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
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

  function ProtectedRoute ({component:Component, ...rest}){

    return (
      <Route {...rest} render={(props)=>{
        return isLogged? <Component {...props}/>:<Redirect to='/' />
      }}/>
    )
  }
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}}>
    {isLogged?<AppBar/>:null}
    {/* <AppBar/> */}
    <Switch>
      <Route path='/' component={LoginPage} exact />
      <Route path='/home' component={HomePage} exact />
      <ProtectedRoute path='/getCustomers' component={CustomerPage} exact/>
      <ProtectedRoute path='/findCustomers' component={FilterCustomers} exact/>
      <ProtectedRoute path='/getOrders' component={OrderPage} exact/>
      <ProtectedRoute path='/findPizza' component={FilterPizza} exact/>
      <ProtectedRoute path='/findOrders' component={FilterOrders} exact/>
      <ProtectedRoute path='/newOrder' component={NewOrder} exact />
      <ProtectedRoute path='/**' component={()=><h1 style={{textAlign:'center'}}>404 not found</h1>}/>
    </Switch>
    </div>
  );
}

export default App;
