import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses, deleteExpense } from "../features/expenses/expensesSlice";

const ExpenseList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <div className="p-4">
      {expenses.map((expense) => (
        <div key={expense.id} className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded">
          <div>
            <p className="font-medium">{expense.category}</p>
            <p className="text-sm text-gray-600">{expense.description}</p>
            <p className="text-sm text-gray-600">{expense.date}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onEdit(expense)}
              className="px-2 py-1 text-sm text-white bg-blue-500 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteExpense(expense.id))}
              className="px-2 py-1 text-sm text-white bg-red-500 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;