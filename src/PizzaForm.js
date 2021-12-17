import React from 'react';


export default function PizzaForm () {

    return (
        <form onSubmit={onSubmit} id="pizza-form">
            <div>
                <input
                    name="name-input"
                    type="text"
                    placeholder="pizza here"
                    maxLength="30"
                    onChange={onChange}
                />
            </div>
        </form>
    )
}