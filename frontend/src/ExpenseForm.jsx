import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createExpense, updateExpense } from "../features/expenses/expensesSlice";

const ExpenseForm = ({ expense = {}, onClose }) => {
  const [formData, setFormData] = useState({
    id: expense.id || null,
    amount: expense.amount || "",
    category: expense.category || "",
    description: expense.description || "",
    date: expense.date || "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(updateExpense(formData));
    } else {
      dispatch(createExpense(formData));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium">Amount</label>
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Category</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
        {formData.id ? "Update" : "Add"} Expense
      </button>
    </form>
  );
};

export default ExpenseForm;