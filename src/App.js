import React, { useState } from 'react';
import Expenses from './components/Expenses';
import './components/Expenses.css';
import ExpensesFilter from './components/ExpensesFilter';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/Card';


function App() {
  const [filterYear, SetFilterYear] = useState('2021');
  const expense = [
    {'title' : 'Car insurance', 'amount' : 100, 'date' : new Date()},
    {'title' : 'Rent', 'amount' : 1000, 'date' : new Date()},
    {'title' : 'Food', 'amount' : 200, 'date' : new Date()},
    {'title' : 'Gas', 'amount' : 50, 'date' : new Date()}
  ];
  
  // return React.createElement(
  //   'div', {},
  //   React.createElement('h2', {}, 'My Expenses'),
  //   React.createElement(Expenses, {expense : expense[0]}),
  //   React.createElement(Expenses, {expense : expense[1]}),
  //   React.createElement(Expenses, {expense : expense[2]}),
  //   React.createElement(Expenses, {expense : expense[3]})
  // )

  const addExpenseHandler = expense => {
    console.log('app', expense);
  }

  const expenseFilterChange = filteredYear => {
    SetFilterYear(filteredYear);
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler}/>
      
      <Card className='expenses'>
        <ExpensesFilter filterYear={filterYear} onExpenseFilterChange={expenseFilterChange}/>
      {
        expense.map( (exp) => {
          return <Expenses expense={exp} filterYear={filterYear}/>
        })
      }
      </Card>
      {/* <Expenses expense={expense[0]}/>
      <Expenses expense={expense[1]}/>
      <Expenses expense={expense[2]}/>
      <Expenses expense={expense[3]}/> */}
    </div>
  );
}

export default App;
