import React from "react";
import create from "zustand";

const AppZustand = create((set) => ({
  budget: 5000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
  setBudget: (newBudget) => set({ budget: newBudget }),
  addExpense: (newExpense) =>
    set((state) => ({ expenses: [...state.expenses, newExpense] })),
  deleteExpense: (expenseId) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== expenseId),
    })),
}));

export default AppZustand;
