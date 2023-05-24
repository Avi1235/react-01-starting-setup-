import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (<Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChange={filterChangeHandler}/>
        {props.expensesItems.map((expense, index) => {
            return <ExpenseItem key={index} title={expense.title} date={expense.date} amount={expense.amount} /> 
          })
          };
    </Card>)
}

export default Expenses;