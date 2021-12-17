import React from 'react';


export default function PizzaForm (props) {

        const { values, update, submit, errors } = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit} id="pizza-form">
            <div>
                <div className="errors">
                    <div>{errors.name_input}</div>
                </div>
                <label>Pizza name
                    <input id="name-input"
                        name="name_input"
                        type="text"
                        placeholder="pizza here"
                        maxLength="30"
                        onChange={onChange}
                        value={values.name_input}
                    />
                </label>
                <label>Pizza Size
                    <select value={values.size} name="size" onChange={onChange} id="size-dropdown">
                        <option value="">-- Select A Size --</option>
                        <option value="Small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>Pineapple
                    <input
                        type="checkbox"
                        name="pineapple"
                        checked={values.pineapple}
                        onChange={onChange}
                    />
                </label>
                <label>Mushrooms
                    <input
                        type="checkbox"
                        name="mushrooms"
                        checked={values.mushrooms}
                        onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>
                <label>Special Instructions
                    <input id="special-text"
                        name="special"
                        type="text"
                        placeholder="pizza here"
                        maxLength="30"
                        onChange={onChange}
                        value={values.special}
                    />
                </label>
            </div>
            <div>
                <button>submit</button>
            </div>
        </form>
    )
}