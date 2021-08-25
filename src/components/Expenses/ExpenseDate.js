import React from 'react';
import "./ExpenseDate.css";

const ExpenseDate = ({date}) => {
    const month = date.toLocaleString("en-US", {month: 'long'});
    const day = date.toLocaleString("en-US", {day: '2-digit'});
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <p className="month">{month}</p>
            <p className="year">{year}</p>
            <p className="day">{day}</p>
        </div>
    );
};

export default ExpenseDate;