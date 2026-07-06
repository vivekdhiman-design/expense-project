# Expense Manager App

A cross-platform expense management app built with **Expo** and **React Native**.

## Features

- 📊 View total expenses and transaction count
- ➕ Add new expenses with title, amount, category, and notes
- 📝 View detailed expense information
- 🗑️ Delete expenses with confirmation
- 💾 Local persistence with AsyncStorage
- 🎨 Clean, modern UI with category-based color coding

## Categories

- 🍔 Food
- 🚗 Transport
- 🛍️ Shopping
- 📄 Bills
- 🎬 Entertainment
- 💊 Health
- 📦 Other

## Project Structure

```
expense-project/
├── App.js                          # Main entry point
├── app.json                        # Expo configuration
├── babel.config.js                 # Babel config
├── package.json                    # Dependencies
├── .gitignore
└── src/
    ├── components/
    │   └── ExpenseCard.js          # Reusable expense card component
    ├── screens/
    │   ├── HomeScreen.js           # Expense list + summary dashboard
    │   ├── AddExpenseScreen.js     # Add new expense form
    │   └── ExpenseDetailScreen.js  # Expense detail view
    ├── navigation/
    │   └── AppNavigator.js         # Stack navigation setup
    ├── context/
    │   └── ExpenseContext.js       # Global state management
    ├── services/
    │   └── expenseService.js       # API service layer (future use)
    └── utils/
        └── storage.js              # AsyncStorage helpers
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Expo dev server:
   ```bash
   npx expo start
   ```

3. Open the app:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your device

## Tech Stack

- **Expo** ~51.0.0
- **React Native** 0.74.5
- **React Navigation** 6.x (Native Stack)
- **AsyncStorage** for local persistence
- **React Context** for state management

## Future Enhancements

- [ ] Expense charts and analytics
- [ ] Budget tracking with limits
- [ ] Export expenses to CSV
- [ ] Cloud sync with REST API
- [ ] Dark mode support
- [ ] Multi-currency support
- [ ] Expense search and filters
