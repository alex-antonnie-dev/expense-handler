import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
// import Card from './Card';

function Expenses(props){
    console.log('expenses props', props);
    return(
        // <Card className='expenses'>
            <ExpenseItem title={props.expense.title} amount={props.expense.amount} date={props.expense.date} filterYear={props.filterYear}/>
        // </Card>
    )
}

export default Expenses;