import './App.css';
import Expenses from "./components/Expenses/Expenses";

function App() {
  const INITIAL_DATA = [
    {
      id: 0,
      title: "toilet paper",
      price: "2. 57",
      date: new Date(2020, 10, 3)
    },
    {
      id: 1,
      title: "book",
      price: "34.7",
      date: new Date(2019, 11, 4)
    },
    {
      id: 2,
      title: "new tv",
      price: "340.7",
      date: new Date(2021, 8, 2)
    },
    {
      id: 3,
      title: "iphone",
      price: "100.9",
      date: new Date(2020, 3, 3)
    }
  ]
  return (
      <div className="App">
        <Expenses items={INITIAL_DATA}/>
      </div>
  );
}

export default App;
