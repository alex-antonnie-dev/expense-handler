import React,{useState} from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const [showAddExpense, setShowAddExpense] = useState(false);

    const saveExpenseHandler = (newExpense) => {
        const savedData = {
            ...newExpense,
            id : Math.random.toString()
        }
        props.onAddExpenseData(savedData);
        // console.log('saved', savedData);
    }

    const showExpenseHandler = () => {
        setShowAddExpense(true);
      }

    return(
        <div className='new-expense'>
            {
                showAddExpense ? (
                    <NewExpenseForm onSaveExpenseData={saveExpenseHandler} setShowAddExpense={setShowAddExpense}/>
                ) : (
                    <button type='button' onClick={showExpenseHandler}>Add Expense</button>
                )
            }
        </div>
    )
}

export default NewExpense;