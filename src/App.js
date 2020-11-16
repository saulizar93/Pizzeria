// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PizzaPage from './components/pizzaPage/PizzaPage';

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
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/getPizzas' component={PizzaPage} exact />
    </Switch>
  );
}

export default App;
