import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({title, date, amount, onDelete, onEdit, key}) => {



    return (
        <div className="expense-item">
            <div className="title-wrapper">
                <p className="title">{title}</p>
                <ExpenseDate date={date}/>
            </div>
            <div className="price-wrapper">
                <p>${amount}</p>
            </div>
            <button>Del</button>
            <button onClick={onEdit}>Edit</button>
        </div>
    );
};

export default ExpenseItem;