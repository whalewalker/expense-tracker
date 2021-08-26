import React, {useState} from 'react';
import "./ExpenseForm.css";
import ExpenseButton from "./ExpenseButton";

const ExpenseForm = ({onSaveNewExpense}) => {
    const INITIAL_STATE = {title: '', amount: '', date: ''};

    const [newExpense, setNewExpense] = useState(INITIAL_STATE);
    const [show, setShow] = useState(false);
    const [isValid, setIsValid] = useState(true);

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

    function validateUserInput(value) {
        return newExpense[value].trim().length === 0;
    }

    const submitHandler = event => {
        event.preventDefault();

        const values = Object.keys(newExpense);

        for (const value of values) {
            if (validateUserInput(value)) {
                setIsValid(false);
                return;
            }
        }
        onSaveNewExpense(newExpense);
        setNewExpense(INITIAL_STATE);
        setShow(false);
        setIsValid(true);
    }



    const {title, amount, date} = newExpense;

    return (
        <div>
            {!show && <ExpenseButton onAddHandler={showHandler}/> }

            {show &&
            <form onSubmit={submitHandler} className="expense-form">
                <div>
                    <div className="form-control">
                        <label style={{color: !isValid && 'red'}}>title</label>
                        <input style={{border: !isValid && '1px solid red'}} value={title} onChange={newExpenseHandler} type="text" name="title"
                               placeholder="Enter title"/>
                    </div>

                    <div className="form-control">
                        <label style={{color: !isValid && 'red'}}>amount</label>
                        <input style={{border: !isValid && '1px solid red'}} value={amount} onChange={newExpenseHandler} type="number" name="amount" step="0.01"
                               min="0.01" placeholder="Enter amount"/>
                    </div>
                    <div className="form-control">
                        <label style={{color: !isValid && 'red'}}>date</label>
                        <input style={{border: !isValid && '1px solid red'}} value={date} onChange={newExpenseHandler} type="date" name="date" min="2019-01-01"
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