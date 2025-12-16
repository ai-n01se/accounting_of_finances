# 💰 Finance Tracker (TypeScript)

A simple finance tracking application built with **TypeScript**, **vanilla JavaScript**, and **modular architecture**.
The project allows you to add income and expense entries, automatically calculate balances, render them in the UI, and persist data using **localStorage**.

This project is focused on **clean architecture**, **state management without frameworks**, and **TypeScript best practices**.

---

## 🚀 Features

* ➕ Add income and expense entries
* 📊 Automatic calculation of:

  * Total balance
  * Total income
  * Total costs
* 🧠 Centralized state management
* 💾 Data persistence with `localStorage`
* 🔁 Safe rendering without mutating state
* 🛡️ Minimal input validation
* 📦 Modular and scalable file structure

---

## 🧱 Project Structure

```
src/
 ├─ addNewEntries.ts        # Adds new finance entries
 ├─ localStorage.ts         # Save/load state to localStorage
 ├─ main.ts                 # App entry point and event handling
 ├─ renderHTMLEntries.ts    # DOM rendering logic
 ├─ state.ts                # Central application state
 ├─ type.ts                 # TypeScript types
 └─ updateBalance.ts        # Balance calculation logic

style/
 └─ style.css

index.html
tsconfig.json
package.json
```

---

## 🧠 Architecture Overview

### State

The application uses a **single source of truth** for state:

```ts
export const entries: Entry[] = [];
```

All modules import and work with the same state instance.

---

### Data Flow

1. User submits the form
2. Input data is validated
3. A new entry is added to the state
4. State is saved to `localStorage`
5. UI is re-rendered based on the updated state

---

## 🛡️ Validation

Minimal validation is implemented to protect application logic:

* Empty descriptions are ignored
* Invalid or non-numeric amounts are rejected

Example:

```ts
if (!description || Number.isNaN(amount)) return;
```

---

## 💾 localStorage

The application automatically saves and restores data:

* On every new entry → state is saved
* On app load → state is restored

```ts
localStorage.setItem('entries', JSON.stringify(entries));
```

---

## 🛠️ Technologies Used

* TypeScript
* HTML5
* CSS3
* localStorage API
* ES Modules

---

## ▶️ How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Compile TypeScript:

```bash
npx tsc
```

3. Open `index.html` using a local server (recommended):

```bash
npx live-server
```

---

## 🎯 Learning Goals of This Project

* Understand state management without frameworks
* Practice clean separation of concerns
* Learn safe data mutation patterns
* Work with browser storage APIs
* Write scalable TypeScript code

---

## 🔮 Possible Improvements

* Delete entries
* Edit entries
* Filters (income / cost)
* Statistics by date
* Migration to React

---

## 👨‍💻 Author

Created by **Denis** as a learning project to improve TypeScript and frontend architecture skills.

---

## ⭐ Notes

This project intentionally avoids frameworks to demonstrate how core frontend concepts work under the hood.
