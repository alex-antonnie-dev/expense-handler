import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

    const saveExpenseHandler = (newExpense) => {
        const savedData = {
            ...newExpense,
            id : Math.random.toString()
        }
        props.onAddExpenseData(savedData);
        // console.log('saved', savedData);
    }

    return(
        <div className='new-expense'>
            <NewExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense;