import './ExpenseForm.css'

const ExpenseForm = () => {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" min="0.01" step="0.01" id="amount" name="amount" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" id="date" name="date" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;