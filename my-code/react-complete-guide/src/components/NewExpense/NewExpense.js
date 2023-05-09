import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const newExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        //this is store data using props
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        {/* onSaveExpensesData is props */}
        <ExpenseForm onSaveExpensesData = {saveExpenseDataHandler} />
    </div>
}

export default newExpense;