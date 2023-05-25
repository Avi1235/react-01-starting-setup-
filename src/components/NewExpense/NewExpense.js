import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//props.onAddExpense deconstructing
const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const saveExponseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  }

  const showFormHandler = (value) => {
    setShowForm(value);
  }

  return (
    <div className='new-expense'>
      {!showForm && <button className='new-expense button' onClick={() => showFormHandler(true)}>Add new expense</button>}
      {showForm && <ExpenseForm onAddedExpenseData={saveExponseDataHandler} onShowForm={showFormHandler}/>}
    </div>
  );
};

export default NewExpense;