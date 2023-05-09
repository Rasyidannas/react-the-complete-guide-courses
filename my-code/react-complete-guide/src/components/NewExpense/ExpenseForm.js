import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [entredTitle, setEnteredTitle] = useState('');
    const [entredAmount, setEnteredAmount] = useState('');
    const [entredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    } 

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    } 

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    } 

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" min="0.01" step="0.01" id="amount" name="amount" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" id="date" name="date" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;