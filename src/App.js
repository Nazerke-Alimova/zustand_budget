import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget/Budget";
import Remaining from "./components/Remaining/Remaining";
import ExpensTotal from "./components/ExpensTotal/ExpensTotal";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
//import { AppProvider } from "./components/Context/AppContext";
// import AppZustand from "./components/AppZustand/AppZustand";

function App() {
  return (
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpensTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
  );
}

export default App;
