import React, { createContext, useState, useEffect, useCallback } from 'react';
import { loadExpenses, saveExpenses } from '../utils/storage';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    (async () => {
      const stored = await loadExpenses();
      setExpenses(stored);
    })();
  }, []);

  const addExpense = useCallback(
    (expense) => {
      const newExpense = {
        id: Date.now(),
        title: expense.title,
        amount: expense.amount,
        category: expense.category,
        note: expense.note || '',
        createdAt: new Date().toISOString(),
      };
      setExpenses((prev) => {
        const updated = [newExpense, ...prev];
        saveExpenses(updated);
        return updated;
      });
    },
    []
  );

  const deleteExpense = useCallback(
    (id) => {
      setExpenses((prev) => {
        const updated = prev.filter((e) => e.id !== id);
        saveExpenses(updated);
        return updated;
      });
    },
    []
  );

  const updateExpense = useCallback(
    (id, updates) => {
      setExpenses((prev) => {
        const updated = prev.map((e) =>
          e.id === id ? { ...e, ...updates } : e
        );
        saveExpenses(updated);
        return updated;
      });
    },
    []
  );

  const getTotalAmount = useCallback(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        updateExpense,
        getTotalAmount,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
