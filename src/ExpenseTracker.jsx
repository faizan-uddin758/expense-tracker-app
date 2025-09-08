import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [view, setView] = useState("table"); // toggle view

  useEffect(() => {
    const expensesRef = ref(db, "expenses");
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loaded = Object.entries(data).map(([id, val]) => ({
          id,
          ...val,
          date: new Date(val.date),
        }));
        loaded.sort((a, b) => b.date - a.date);
        setExpenses(loaded);
      } else {
        setExpenses([]);
      }
    });
  }, []);

  const filteredExpenses = expenses.filter(
    (exp) =>
      (!startDate || exp.date >= startDate) && (!endDate || exp.date <= endDate)
  );

  return (
    <div className="tracker-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAdd={() => {}} />
      <ExpenseFilter
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      {/* Toggle buttons */}
      <div className="view-toggle">
        <button
          className={view === "table" ? "active" : ""}
          onClick={() => setView("table")}
        >
          📋 Table
        </button>
        <button
          className={view === "graph" ? "active" : ""}
          onClick={() => setView("graph")}
        >
          📊 Graph
        </button>
      </div>

      {/* Conditional rendering */}
      {view === "table" ? (
        <ExpenseTable expenses={filteredExpenses} />
      ) : (
        <div>
          <h2 style={{ textAlign: "center" }}>📊 Monthly Expenses</h2>
          <ExpenseChart expenses={filteredExpenses} />
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
