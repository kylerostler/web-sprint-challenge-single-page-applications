import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';

import PizzaMenu from './PizzaMenu';
import PizzaForm from './PizzaForm'

import schema from './PizzaFormSchema';
import axios from "axios";

const initialFormValues = {
  name_input: '',
  special: '',
  pepperoni: false,
  pineapple: false,
  mushrooms: false,
  sausage:false,
  size: '',
}

const initialPizzas = [];

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setError] = useState('');


  

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setError({ ...formErrors, [name]: ''}))
    .catch(err => setError({ ...formErrors, [name]: err.errors[0]}))
  }

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue);
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const postNewPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
    .then(resp => {
      setPizzas([resp.data, ...pizzas])
      console.log(resp.data)
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const submitForm = () => {
      const newPizza = {
        name_input: formValues.name_input.trim(),
        size: formValues.size,
        // toppings: ['pepperoni', 'pineapple', 'mushrooms', 'sausage'].filter(topping => !!formValues[topping]),
        pepperoni: formValues.pepperoni,
        pineapple: formValues.pineapple,
        mushrooms: formValues.mushrooms,
        sausage: formValues.sausage,
        special: formValues.special
      }
       postNewPizza(newPizza);
    }


  return (
    <>
      <h1>BloomTech Eats</h1>
      <p>Get Your Pizza! Tasty Pizza!</p>
      <Switch>
        <Route path="/pizza">
          <PizzaForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
          errors={formErrors}
           />
        </Route>
        
        <Route path="/">
          <PizzaMenu />
        </Route>
      </Switch>
    </>
  );
};
export default App;
