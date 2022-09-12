import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('updated!');
        console.log(title);
    }    
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'><h2>{title}</h2></div>
            <div className='expense-item__price'>${props.amount}</div>
            <button type='button' onClick={clickHandler}>Delete</button>
        </Card>
    )
}

export default ExpenseItem;