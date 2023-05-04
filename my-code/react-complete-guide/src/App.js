// import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Electric Fee",
      amount: 100,
      date: new Date(2023, 3, 29),
    },
    {
      id: "e2",
      title: "Internet Fee",
      amount: 10,
      date: new Date(2023, 3, 29),
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

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      {/* This is custom component */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
