import React from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({title, date, amount}) => {
    return (
        <div className="expense-item">
            <div className="title-wrapper">
                <p className="title">{title}</p>
                <ExpenseDate date={date}/>
            </div>
            <div className="price-wrapper">
                <p>${amount}</p>
            </div>
        </div>
    );
};

export default ExpenseItem;