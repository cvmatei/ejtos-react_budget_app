import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);

        setNewBudget(newBudgetValue); // Update local state

        dispatch({  // Dispatch an action to update the context state
            type: 'SET_BUDGET',
            payload: newBudgetValue
        });

        if(remaining < 0){
            alert('Budget cannot be lower than the spending.')
            return;
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
