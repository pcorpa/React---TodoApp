# React Todo App 📝

This is a simple Todo application built with **React**, **TypeScript**, and **Bootstrap**. It allows users to add, complete, and delete tasks. The app uses `useReducer` for state management and demonstrates best practices in component-based development.

## 🚀 Features

- Add new todo items
- Mark tasks as complete or incomplete
- Delete tasks
- Simple and responsive UI using Bootstrap
- Built with TypeScript for type safety

## 🛠️ Technologies Used

- React
- TypeScript
- Bootstrap 5
- Bootstrap Icons (via CDN)

## 🧩 Project Structure

src/
├── components/ # TodoAdd, TodoList, TodoItem
├── hooks/ # Custom hook: useForm
├── interfaces.ts # TypeScript interfaces
├── reducers/ # todoReducer for state management
├── App.tsx # Main app logic
└── index.tsx # Entry point

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

````bash
git clone https://github.com/pcorpa/React-TodoApp.git
cd React-TodoApp
yarn ```

### **Running the App**

```yarn dev```



### 🎨 Customization

To use Bootstrap Icons, make sure this line is included in your index.html:

```<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
/>```

📚 **Learnings**

This project helped me practice:

- Type-safe React with TypeScript
- Using useReducer for complex state logic
- Creating reusable components
- Bootstrap layout and styling
- Custom hooks for form handling
- Add localStorage to persist tasks
- Filter completed vs pending tasks
- Improve accessibility and mobile responsiveness
- Add unit tests with Jest + React Testing Library
````
