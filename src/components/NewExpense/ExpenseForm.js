import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onAddedExpenseData, onShowForm }) => {
  const [expense, setExpenseForm] = useState({ title: '', amount: '', date: '' });

  const handleTitleInput = (event) => {
    setExpenseForm({
      ...expense,
      title: event.target.value,
    });
  }

  const handleAmountInput = (event) => {
    setExpenseForm({
      ...expense,
      amount: event.target.value,
    });
  }

  const handleDateInput = (event) => {
    setExpenseForm({
      ...expense,
      date: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseFormObject = {
      title: expense.title,
      amount: +expense.amount,
      date: new Date(expense.date),
    };

    if(expenseFormObject.amount !== '' || expenseFormObject.title !== '' || expenseFormObject.date !== '') {
      onAddedExpenseData(expenseFormObject);
      setExpenseForm({
        title: '',
        amount: '',
        date: ''
      });
    }

    onShowForm(false);
  }

  const closeClickHandler = () => {
    onShowForm(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={expense.title} onChange={handleTitleInput} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={expense.amount} min='0.01' step='0.01' onChange={handleAmountInput} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={expense.date} min='2019-01-01' max='2023-12-31' onChange={handleDateInput} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={closeClickHandler}>Cancel</button>
        <button type='submit'>Save Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;