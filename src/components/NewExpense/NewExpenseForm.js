import React,{ useState } from "react";
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle]   = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate]     = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount: '',
    //     enteredDate  : ''
    // });

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput( (previousState) => {
        //     return { ...previousState, enteredAmount : event.target.value}
        // })
    }
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return {...previousState, enteredTitle : event.target.value}
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput( (previousState) => {
        //     return {...previousState, enteredDate : event.target.value}
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expense = {
            title : enteredTitle,
            amount: +enteredAmount,
            date : new Date(enteredDate)
        }
        props.setShowAddExpense(false);
        props.onSaveExpenseData(expense);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const onCancelHandler = () => {
        props.setShowAddExpense(false);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' id='title' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2022-07-01' max='2022-08-30' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={onCancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default NewExpenseForm;