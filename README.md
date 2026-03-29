# Kanban Task Board

This is a simple Kanban-style task board built with HTML, CSS, and vanilla JavaScript. The app supports task persistence using local storage and allows tasks to be added, edited, and deleted through a modal interface.

## Features

- Load tasks from `localStorage` on page load
- Add new tasks through a modal form
- Edit existing tasks by clicking a task card
- Delete tasks from the modal
- Task grouping by status: `todo`, `doing`, and `done`
- Responsive layout for desktop and smaller screens

## How to Run

1. Open `index.html` in your browser.
2. Or use a local development server like VS Code Live Server.
3. The task board will load initial tasks from `initialData.js` if local storage is empty.

## Project Files

- `index.html` — main markup for the Kanban board and task modal
- `style.css` — visual styling and responsive layout
- `initialData.js` — default task list used when no tasks exist in storage
- `scripts/main.js` — app initialization and entry point
- `scripts/utils/localStorage.js` — load/save tasks and storage helpers
- `scripts/ui/render.js` — task rendering and modal opening logic
- `scripts/ui/modalHandlers.js` — modal behavior, task creation, edit, and delete logic

## Notes

- Tasks are stored in browser `localStorage` under the `tasks` key.
- If storage content is invalid or empty, initial seed data from `initialData.js` will be loaded.
- The modal uses native `<dialog>` styling and custom form controls for a clean experience.

## Development Tips

- Use the browser console to inspect or reset stored tasks via `localStorage.removeItem('tasks')`.
- Ensure JavaScript is enabled and the project is served from a local server for best behavior.
- Keep `initialData.js` as the seed source for default board content.
