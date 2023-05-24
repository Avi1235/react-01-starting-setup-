import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

                    //props.onAddExpense deconstructing
const NewExpense = ({onAddExpense}) => {
    const saveExponseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
    }

  return (
    <div className='new-expense'>
      <ExpenseForm onAddedExpenseData={saveExponseDataHandler}/>
    </div>
  );
};

export default NewExpense;