import React, {useState} from 'react';
import "./ExpenseForm.css";
import ExpenseButton from "./ExpenseButton";

const ExpenseForm = ({onSaveNewExpense}) => {
    const [newExpense, setNewExpense] = useState({});
    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(true);
    }

    const cancelHandler = () => {
        setShow(false);
    }

    const newExpenseHandler = event => {
        const {value, name} = event.target;
        setNewExpense(prevState => {
            return {...prevState, [name]: value}
        });
    }

    const submitHandler = event => {
        event.preventDefault();
        onSaveNewExpense(newExpense);
        setNewExpense({});
        setShow(false);
    }

    const {title, amount, date} = newExpense;

    return (
        <div>
            {!show && <ExpenseButton onAddHandler={showHandler}/> }

            {show &&
            <form onSubmit={submitHandler} className="expense-form">
                <div>
                    <div className="form-control">
                        <label>title</label>
                        <input value={title} onChange={newExpenseHandler} type="text" name="title"
                               placeholder="Enter title"/>
                    </div>

                    <div className="form-control">
                        <label>amount</label>
                        <input value={amount} onChange={newExpenseHandler} type="number" name="amount" step="0.01"
                               min="0.01" placeholder="Enter amount"/>
                    </div>
                    <div className="form-control">
                        <label>date</label>
                        <input value={date} onChange={newExpenseHandler} type="date" name="date" min="2019-01-01"
                               max="2022-12-31"/>
                    </div>
                </div>


                <div className="btn">
                    <button type="submit">add expense</button>
                    <button onClick={cancelHandler} type="button">cancel</button>
                </div>
            </form>
            }
        </div>
    );
};

export default ExpenseForm;