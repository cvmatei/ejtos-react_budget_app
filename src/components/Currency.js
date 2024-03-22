import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const{currency, dispatch} = useContext(AppContext);
    const[selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    };

    return (
        <select 
        value={selectedCurrency} 
        style={{
            padding: '8px 12px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: 'lightgreen',
            color: 'black'}}
        onChange={handleCurrencyChange}>
            <option value="$">Dollar ($)</option>
            <option value="£">Pound (£)</option>
            <option value="₹">Ruppee (₹)</option>
            <option value="€">Euro (€)</option>
        </select>
    );
};

export default Currency;