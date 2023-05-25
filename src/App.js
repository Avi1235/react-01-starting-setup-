import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const [expensesItems, setExpensesItems] = useState([
    {
      date: new Date(2023, 5, 12),
      title: "car insuraance",
      amount: 123.45,
      id: Math.random().toString()
    },
    {
      date: new Date(2023, 11, 2),
      title: "house insurance",
      amount: 300,
      id: Math.random().toString()
    },
    {
      date: new Date(2023, 5, 8),
      title: "dentist",
      amount: 150,
      id: Math.random().toString()
    },
    {
      date: new Date(2020, 5, 8),
      title: "oxxo expense",
      amount: 150,
      id: Math.random().toString()
    },
  ]);

  const addExpenseHandler = expense => {
    expense.date = new Date(expense.date);
    setExpensesItems(prevExpense => [expense, ...prevExpense]);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expensesItems={expensesItems}/>
    </div>
  );
}

export default App;
