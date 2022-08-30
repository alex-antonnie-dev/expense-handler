import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses(props){
    return(
        <Card className='expenses'>
            <ExpenseItem title={props.expense.title} amount={props.expense.amount} date={props.expense.date}/>
        </Card>
    )
}

export default Expenses;