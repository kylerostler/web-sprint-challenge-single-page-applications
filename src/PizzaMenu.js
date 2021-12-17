import React from 'react';
import { Link } from 'react-router-dom';

export default function PizzaMenu () {

    return (
        <div>
            <Link to ={`/pizza`}>
            <button id="order-pizza">Order Pizza</button>
            </Link>
        </div>
    )
}