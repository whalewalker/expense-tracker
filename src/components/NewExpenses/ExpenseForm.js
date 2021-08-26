import React, {useState} from 'react';
import ExpenseButton from "./ExpenseButton";
import Button from "../Button/Button";
import styled from "styled-components";

const ExpenseForm = ({onSaveNewExpense}) => {

    const FormControl = styled.div`
        width: 350px;
        margin: 1rem 1rem 1rem 0;
      
      @media screen and (max-width: 950px){
          width: 100%;
      }
    `

    const ExpenseFormContainer = styled.form`
      
        background-color: #9f88e6;
        border-radius: 10px;
        margin-bottom: 2rem;
        width: 900px;
        color: black;
        text-transform: capitalize;
        padding: 0 1rem 1rem;

      & > div{
        display: flex;
        flex-wrap: wrap;
      }

      & .btn{
        display: flex;
        justify-content: flex-end;
      }

      & input {
        width: 100%;
        padding: 1rem 1rem 1rem 0.5rem;
        font-size: 1rem;
        border-radius: 5px;
        border: ${props => (props.isvalid ? '2px solid #ffffff' : 'none')};
        background-color: ${props => (props.isvalid ? 'transparent' : 'white')};
      }

      & label {
        display: block;
        line-height: 1.5;
        font-weight: bold;
        font-size: 1.1rem;
        color: ${props=> (props.isvalid ? '#ffffff' : 'black')}
      }
      

      & input::placeholder{
        color: ${props=> (props.isvalid ? 'white' : 'gray')}
      }


      @media screen and (max-width: 950px){
          width: 90%;
      }
    `

    const INITIAL_STATE = {title: '', amount: '', date: ''};

    const [newExpense, setNewExpense] = useState(INITIAL_STATE);
    const [show, setShow] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const showHandler = () => {
        setShow(true);
    }

    const cancelHandler = () => {
        setShow(false);
        setIsValid(true);
        setNewExpense(INITIAL_STATE);
    }

    const newExpenseHandler = event => {
        const {value, name} = event.target;
        if (value.trim().length > 0){
            setIsValid(true);
        }
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

            {show && <ExpenseFormContainer onSubmit={submitHandler} isvalid={!isValid}>
                <div>
                    <FormControl>
                        <label>title</label>
                        <input value={title} onChange={newExpenseHandler} type="text" name="title"
                               placeholder="Enter title"/>
                    </FormControl>

                    <FormControl>
                        <label>amount</label>
                        <input value={amount} onChange={newExpenseHandler} type="number" name="amount" step="0.01"
                               min="0.01" placeholder="Enter amount"/>
                    </FormControl>
                    <FormControl>
                        <label>date</label>
                        <input value={date} onChange={newExpenseHandler} type="date" name="date" min="2019-01-01"
                               max="2022-12-31"/>
                    </FormControl>
                </div>
                <div className="btn">
                    <Button type="submit">add expense</Button>
                    <Button onClick={cancelHandler} type="button">cancel</Button>
                </div>

            </ExpenseFormContainer>
            }
        </div>
    );
};

export default ExpenseForm;