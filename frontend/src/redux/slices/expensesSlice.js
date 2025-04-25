import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/expense"; // Replace with your backend URL

// Async thunks for API calls
export const fetchExpenses = createAsyncThunk("expenses/fetchExpenses", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const createExpense = createAsyncThunk("expenses/createExpense", async (expense) => {
  const response = await axios.post(API_URL, expense);
  return response.data;
});

export const updateExpense = createAsyncThunk("expenses/updateExpense", async (expense) => {
  const response = await axios.put(`${API_URL}/${expense.id}`, expense);
  return response.data;
});

export const deleteExpense = createAsyncThunk("expenses/deleteExpense", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.expenses = action.payload;
      })
      .addCase(createExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const index = state.expenses.findIndex((e) => e.id === action.payload.id);
        if (index !== -1) {
          state.expenses[index] = action.payload;
        }
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter((e) => e.id !== action.payload);
      });
  },
});

export default expensesSlice.reducer;