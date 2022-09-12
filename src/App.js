import React, { useState } from 'react';
import Expenses from './components/Expenses';
import './components/Expenses.css';

import NewExpense from './components/NewExpense/NewExpense';
// import Card from './components/Card';
const dummy_expenses = [
  {'id' : '1','title' : 'Car insurance', 'amount' : 100, 'date' : new Date()},
  {'id' : '2','title' : 'Rent', 'amount' : 1000, 'date' : new Date()},
  {'id' : '3','title' : 'Food', 'amount' : 200, 'date' : new Date()},
  {'id' : '4','title' : 'Gas', 'amount' : 50, 'date' : new Date()}
];

function App() {
  const [expenses, setExpenses]     = useState(dummy_expenses);
  const [filterYear, SetFilterYear] = useState('2021');
  
  
  // return React.createElement(
  //   'div', {},
  //   React.createElement('h2', {}, 'My Expenses'),
  //   React.createElement(Expenses, {expense : expense[0]}),
  //   React.createElement(Expenses, {expense : expense[1]}),
  //   React.createElement(Expenses, {expense : expense[2]}),
  //   React.createElement(Expenses, {expense : expense[3]})
  // )

  const addExpenseHandler = expense => {
    // const exp = [...expenses, expense];
    setExpenses((previousExp) => ( [...previousExp, expense]));
    // console.log('app', exp);
  }

  

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler}/>
      
      <Expenses expenses={expenses}/>

      {/* <Card className='expenses'>
        <ExpensesFilter filterYear={filterYear} onExpenseFilterChange={expenseFilterChange}/>
      {
        expense.map( (exp) => {
          return <Expenses expense={exp} filterYear={filterYear}/>
        })
      }
      </Card> */}
      {/* <Expenses expense={expense[0]}/>
      <Expenses expense={expense[1]}/>
      <Expenses expense={expense[2]}/>
      <Expenses expense={expense[3]}/> */}
    </div>
  );
}

export default App;
