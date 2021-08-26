import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({items}) => {
    const[filteredYear, setFilteredYear] = useState("2020");

    const filterHandler = (event) =>{
        setFilteredYear(event.target.value);
    }

    const filteredExpenseByYear = items.filter((item) =>{
        return item.date.getFullYear().toString() === filteredYear;
    })

    let expenseContent = <h3 className="no-expense">No expenses found</h3>

    const deleteHandler  = e =>{

    }

    const editHandler  = e =>{

    }

    if (filteredExpenseByYear.length > 0){
        expenseContent = filteredExpenseByYear.map(item => <ExpenseItem onDelete={deleteHandler}  onEdit={editHandler} key={item.id} {...item}/>);
    }

    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onFilteredYear={filterHandler}/>
            <ExpensesChart expenses={filteredExpenseByYear}/>
            {expenseContent}
        </div>
    );
};

export default Expenses;