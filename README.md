# Todo Redux

A responsive task management application built with React, Redux Toolkit, and Tailwind CSS. It demonstrates centralized state management through a simple todo workflow: add tasks, update descriptions, mark items as complete, and filter the visible list.

## Features

- Add new tasks with input validation
- Mark tasks as done or not done
- Edit existing task descriptions
- Filter tasks by `All`, `Done`, or `Not Done`
- Responsive interface styled with Tailwind CSS
- Redux Toolkit slice for task and filter state management

## Tech Stack

- [React](https://react.dev/) for the user interface
- [Redux Toolkit](https://redux-toolkit.js.org/) and [React Redux](https://react-redux.js.org/) for application state
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vite.dev/) for development and builds
- [ESLint](https://eslint.org/) for code quality checks

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- npm, which is included with Node.js

### Installation

```bash
git clone <repository-url>
cd todo-redux
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the local URL shown by Vite in your terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```text
src/
|-- componenet/
|   |-- Addtask.jsx       # Form for creating a task
|   |-- ListTask.jsx      # Filter controls and rendered task list
|   `-- Task.jsx          # Individual task display and editing
|-- redux/
|   |-- store.js          # Redux store configuration
|   `-- tasksSlice.js     # Task reducers and filter state
|-- App.jsx               # Main application layout
|-- index.css             # Tailwind import and global styles
`-- main.jsx              # React entry point and Redux Provider
```

Note: the `componenet` directory name reflects the current source folder spelling.

## State Management

The `tasks` slice contains:

- A `tasks` array, initially populated with two sample tasks
- A `filter` value used to display all, completed, or incomplete tasks

The app supports the following Redux actions:

- `addTask`
- `toggleTask`
- `editTask`
- `setFilter`

Task data is currently kept in application memory, so changes reset when the page is refreshed.

## Build for Production

```bash
npm run build
```

To test the generated production build locally:

```bash
npm run preview
```
