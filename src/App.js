import React from 'react';
import Expenses from './components/Expenses';

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      {
        expense.map( (exp) => {
          return <Expenses expense={exp}/>
        })
      }
      {/* <Expenses expense={expense[0]}/>
      <Expenses expense={expense[1]}/>
      <Expenses expense={expense[2]}/>
      <Expenses expense={expense[3]}/> */}
    </div>
  );
}

export default App;
