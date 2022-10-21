import React,{ useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import Card from './Card';

function Expenses({expenses, setExpenses}){
    // const [expensesList, setExpensesList] = useState(expenses);
    const [filterYear, SetFilterYear] = useState('2021');

    const expenseFilterChange = filteredYear => {
        SetFilterYear(filteredYear);
        // let newExpenses = [...expenses];
        // let filteredExpenses = newExpenses.filter( (exp) => {
        //     if(exp.date.getFullYear() == filteredYear){
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });
        // setExpensesList(filteredExpenses);
    }

    const filteredExpenses = expenses.filter((exp) => {
        return exp.date.getFullYear() == filterYear;
    });

    let expensesContent = <p>No task found</p>;
    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map( expense => {
            return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        })
    }
    return(
        <Card className='expenses'>
            <ExpensesFilter filterYear={filterYear} onExpenseFilterChange={expenseFilterChange}/>
            <ExpensesChart expenses={filteredExpenses} />
            {expensesContent}
            {/* <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} filterYear={props.filterYear}/> */}
        </Card>
    )
}

export default Expenses;