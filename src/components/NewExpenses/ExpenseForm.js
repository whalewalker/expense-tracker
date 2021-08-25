import React, {useState} from 'react';
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveNewExpense}) => {
    const [newExpense, setNewExpense] = useState({});

    const newExpenseHandler = event =>{
        const {value, name} = event.target;
        setNewExpense(prevState => {
            return {...prevState, [name]: value}
        });
    }

    const submitHandler = event =>{
        event.preventDefault();
        onSaveNewExpense(newExpense);
    }

    const {title, amount, date} = newExpense;

    return (
        <form onSubmit={submitHandler} className="expense-form">
            <div>
                <div className="form-control">
                    <label>title</label>
                    <input value={title} onChange={newExpenseHandler} type="text" name="title" placeholder="Enter title"/>
                </div>

                <div className="form-control">
                    <label>amount</label>
                    <input value={amount} onChange={newExpenseHandler} type="number" name="amount" step="0.01" min="0.01" placeholder="Enter amount"/>
                </div>
                <div className="form-control">
                    <label>date</label>
                    <input value={date} onChange={newExpenseHandler} type="date" name="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>


          <div className="btn">
              <button>add expense</button>
          </div>
        </form>
    );
};

export default ExpenseForm;