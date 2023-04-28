import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023, 3, 29);
    const expenseTitle = 'Electriacal Fee';
    const expenseAmount = 50;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__decription">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
