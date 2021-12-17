import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';

import PizzaMenu from './PizzaMenu';
import PizzaForm from './PizzaForm'

import schema from './PizzaFormSchema';

const initialFormValues = {
  name_input: '',
}

const App = () => {
  const [pizzas, setPizzas] = useState([]);
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

  const submitForm = () => {
      const newPizza = {
        name_input: formValues.name_input.trim(),
      }
      if(!newPizza.name_input) {
        setError('PIZZA REQUIRED')
      } else {
        setPizzas(pizzas.concat(newPizza));
        setFormValues(initialFormValues);
        setError('');
      }
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
