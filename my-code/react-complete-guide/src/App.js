// import './App.css';
import Expenses from './components/Expenses';

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
      {/* <h2>Let's get started!</h2> */}
      {/* This is custom component */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
