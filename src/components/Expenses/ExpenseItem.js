import React from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({otherProps}) => {
    return (
        <div className="expense-item">
            <div className="title-wrapper">
                <p className="title">{otherProps.title}</p>
                <ExpenseDate date={otherProps.date}/>
            </div>
            <div className="price-wrapper">
                <p>${otherProps.price}</p>
            </div>
        </div>
    );
};

export default ExpenseItem;