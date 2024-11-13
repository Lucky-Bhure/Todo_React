# Todo_React

Todo_React is a simple, functional React Todo application. Users can add, check off, and delete tasks, with the added feature of a live date and time display. The app uses `localStorage` to persist todos, ensuring tasks remain even after refreshing the page.

## Features

- **Add Tasks**: Input tasks via the input field, and they will appear in the todo list.
- **Check Off Tasks**: Click a checkbox to mark tasks as completed.
- **Delete Individual Tasks**: Delete a specific task from the list.
- **Clear All Tasks**: Option to remove all tasks at once.
- **Live Date and Time Display**: The date and time update every second, displayed at the top of the app.
- **Persistent Storage**: Todos are saved to `localStorage`, so they persist even after closing the app.

## Components

### `Todo`
The main component that handles task creation, deletion, and local storage integration.

- **State Management**: Uses React's `useState` and `useEffect` to manage tasks and save them to `localStorage`.
- **Functions**:
  - `handleInputChange`: Updates the input field state.
  - `handleFormSubmit`: Adds a new task if the input field is not empty and prevents duplicates.
  - `handleCheckEvent`: Toggles the checked status of a task.
  - `handleClearAll`: Clears all tasks from the list.
  
### `TodoList`
A component that renders the list of tasks and provides individual buttons to mark tasks as completed or delete them.

- **Props**:
  - `tasks`: The list of tasks to render.
  - `setTasks`: Updates the task list in the `Todo` component.
  - `handleCheckEvent`: Toggles the checked status of each task.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Lucky-Bhure/Todo_React.git

2. Navigate to the project directory:

   ```bash
   cd react-todo-app

3. Install dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash
   npm start

5. Open http://localhost:3000 to view the app in your browser.

## Usage
- `Adding a Task`: Type a task in the input field and click "Add Task" or press Enter.
- `Marking a Task as Complete`: Click on the checkbox next to the task.
- `Deleting a Task`: Click the delete icon next to the task.
- `Clearing All Tasks`: Click the "Clear All" button to remove all tasks.
- `Viewing Date and Time`: The current date and time are displayed at the top of the app.\
  
## Dependencies
- `React` - A JavaScript library for building user interfaces.
- `uuid` - For generating unique task IDs.
- `React Icons` - For including icons in the UI.

## License
This project is open-source and available under the MIT License.
