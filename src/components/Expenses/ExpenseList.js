import React from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList(props) {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Expenses Not Found</h2>
    }

    return (
        <ul className='expenses-list' >
            {props.expenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
        </ul>
    )
}
