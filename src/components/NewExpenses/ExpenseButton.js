import React from 'react';
import "./ExpenseButton.css";
import Button from "../Button/Button";

const ExpenseButton = ({onAddHandler}) => {
    return (
        <div className="expense-button">
            <Button onClick={onAddHandler}>add expense</Button>
        </div>
    );
};

export default ExpenseButton;