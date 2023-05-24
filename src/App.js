import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const [expensesItems, setExpensesItems] = useState([
    {
      date: new Date(2023, 5, 12),
      title: "car insuraance",
      amount: 123.45
    },
    {
      date: new Date(2023, 12, 2),
      title: "house insurance",
      amount: 300
    },
    {
      date: new Date(2023, 5, 8),
      title: "dentist",
      amount: 150
    },
  ]);

  const addExpenseHandler = expense => {
    expense.date = new Date(expense.date);
    console.log(expense);
    setExpensesItems([...expensesItems, expense]);
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
