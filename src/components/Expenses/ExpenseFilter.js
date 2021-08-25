import React from 'react';
import "./ExpenseFilter.css"

const ExpenseFilter = ({onFilteredYear, selected}) => {
    return (
        <div className="expense-filter">
            <h3>Filter by year</h3>
            <select name="year" id="years" value={selected} onChange={onFilteredYear}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;