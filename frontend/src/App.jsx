import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [editingExpense, setEditingExpense] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ExpenseForm
            expense={editingExpense}
            onClose={() => setEditingExpense(null)}
          />
        </div>
        <div>
          <ExpenseList onEdit={(expense) => setEditingExpense(expense)} />
        </div>
      </div>
      <div className="mt-8">
        {/* <Dashboard /> */}
      </div>
    </div>
  )
}

export default App
