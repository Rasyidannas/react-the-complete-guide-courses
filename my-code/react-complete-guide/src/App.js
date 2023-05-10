import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Electric Fee",
      amount: 100,
      date: new Date(2021, 3, 29),
    },
    {
      id: "e2",
      title: "Internet Fee",
      amount: 10,
      date: new Date(2020, 3, 29),
    },
    {
      id: "e3",
      title: "Water Fee",
      amount: 20,
      date: new Date(2023, 3, 29),
    },
    {
      id: "e4",
      title: "Software Fee",
      amount: 120,
      date: new Date(2023, 3, 29),
    },
  ];

  //this is store data newExpense
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      {/* onAddExpense is props */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
