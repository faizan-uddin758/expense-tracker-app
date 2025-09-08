import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "./firebase";

const ExpenseForm = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    const newExpense = {
      amount: Number(amount),
      category,
      date: new Date().toISOString(),
    };

    await push(ref(db, "expenses"), newExpense);

    setAmount("");
    setCategory("");
    onAdd(); // refresh
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category (Food, Travel...)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
