import React from "react";
import { Route, Switch } from 'react-router-dom';

import PizzaMenu from './PizzaMenu';
import PizzaForm from './PizzaForm'

const App = () => {


  return (
    <>
      <h1>BloomTech Eats</h1>
      <p>Get Your Pizza! Tasty Pizza!</p>
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        
        <Route path="/">
          <PizzaMenu />
        </Route>
      </Switch>
    </>
  );
};
export default App;
