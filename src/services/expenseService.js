// Expense service for future API integration
// Currently uses local storage, but can be extended to use REST API

const API_BASE_URL = ''; // Add your API URL here

export const expenseService = {
  // GET all expenses
  async getAllExpenses() {
    // Replace with actual API call
    // const response = await fetch(`${API_BASE_URL}/expenses`);
    // return response.json();
  },

  // POST a new expense
  async createExpense(expense) {
    // const response = await fetch(`${API_BASE_URL}/expenses`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(expense),
    // });
    // return response.json();
  },

  // PUT update an expense
  async updateExpense(id, updates) {
    // const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(updates),
    // });
    // return response.json();
  },

  // DELETE an expense
  async deleteExpense(id) {
    // const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
    //   method: 'DELETE',
    // });
    // return response.ok;
  },
};
