import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ExpenseChart = ({ expenses }) => {
  // Group expenses by month
  const monthlyData = expenses.reduce((acc, exp) => {
    const month = exp.date.toLocaleString("default", { month: "short", year: "numeric" });
    if (!acc[month]) acc[month] = 0;
    acc[month] += parseFloat(exp.amount);
    return acc;
  }, {});

  const chartData = Object.entries(monthlyData).map(([month, total]) => ({
    month,
    total,
  }));

  return (
    <div style={{ width: "100%", height: 400, marginTop: "30px" }}>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" tick={{ fontSize: 14, fill: "#333" }} />
          <YAxis tick={{ fontSize: 14, fill: "#333" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "8px" }}
            labelStyle={{ fontWeight: "bold", color: "#444" }}
          />
          <Legend />
          {/* Gradient */}
          <defs>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6a11cb" stopOpacity={0.9} />   {/* Purple */}
              <stop offset="100%" stopColor="#2575fc" stopOpacity={0.9} />  {/* Blueish-Teal */}
            </linearGradient>
          </defs>
          <Bar dataKey="total" fill="url(#expenseGradient)" radius={[8, 8, 0, 0]} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
