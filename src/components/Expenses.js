import React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from './Card';

function Expenses({expenses, setEx}){
    const [filterYear, SetFilterYear] = useState('2021');

    const expenseFilterChange = filteredYear => {
        SetFilterYear(filteredYear);
    }

    console.log('expenses props', expenses);
    return(
        <Card className='expenses'>
            <ExpensesFilter filterYear={filterYear} onExpenseFilterChange={expenseFilterChange}/>
            {
                expenses.map( expense => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
})
            }
            {/* <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} filterYear={props.filterYear}/> */}
        </Card>
    )
}

export default Expenses;