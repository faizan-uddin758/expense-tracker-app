import React from "react";

const ExpenseTable = ({ expenses }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Month</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>₹{exp.amount}</td>
            <td>{exp.category}</td>
            <td>{exp.date.toLocaleDateString()}</td>
            <td>{exp.date.toLocaleString("default", { month: "long" })}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
