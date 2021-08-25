import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import {useState} from "react";

function App() {
  const INITIAL_DATA = [
    {
      id: 0,
      title: "toilet paper",
      amount: "2.57",
      date: new Date(2020, 10, 3)
    },
    {
      id: 1,
      title: "book",
      amount: "34.7",
      date: new Date(2019, 11, 4)
    },
    {
      id: 2,
      title: "new tv",
      amount: "30.7",
      date: new Date(2021, 8, 2)
    },
    {
      id: 3,
      title: "iphone",
      amount: "10.9",
      date: new Date(2020, 3, 3)
    }
  ]

  const [expense, setExpenses] = useState(INITIAL_DATA)

  const updateExpenseHandler = (expense) => {
    setExpenses(prevState => {
      return [...prevState, expense]
    });
  }

  return (
      <div className="App">
        <NewExpense onUpdateExpense={updateExpenseHandler}/>
        <Expenses items={expense}/>
      </div>
  );
}

export default App;
