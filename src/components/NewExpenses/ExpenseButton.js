import React from 'react';
import "./ExpenseButton.css";

const ExpenseButton = ({onAddHandler}) => {
    return (
        <div className="expense-button">
            <button onClick={onAddHandler}>add expense</button>
        </div>
    );
};

export default ExpenseButton;