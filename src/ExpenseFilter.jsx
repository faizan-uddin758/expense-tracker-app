import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseFilter = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <div className="expense-filter">
      <label>From: </label>
      <DatePicker selected={startDate} onChange={(d) => setStartDate(d)} />
      <label>To: </label>
      <DatePicker selected={endDate} onChange={(d) => setEndDate(d)} />
    </div>
  );
};

export default ExpenseFilter;
