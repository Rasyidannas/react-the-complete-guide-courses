import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 29th 2023</div>
      <div className="expense-item__decription">
        <h2>Electrical Fee</h2>
        <div className="expense-item__price">$50</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
