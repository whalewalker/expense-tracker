import React from 'react';
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onUpdateExpense}) => {
    const addExpenseHandler = (enteredExpense) =>{
        const expenseData = {
            ...enteredExpense,
            date:  new Date(enteredExpense.date),
            id: Math.random().toString()
        }
      onUpdateExpense(expenseData);
    }

    return (
        <div>
            <ExpenseForm onSaveNewExpense={addExpenseHandler}/>
        </div>
    );
};

export default NewExpense;