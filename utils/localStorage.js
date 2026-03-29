import { initialTasks } from "../initialData.js";

const STORAGE_KEY = "kanban-tasks-v3";

/**
 * Saves the full task list to local storage.
 * @param {Array<Object>} tasks
 * @returns {void}
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Loads stored tasks, seeding the initial board when no saved tasks exist yet.
 * @returns {Array<Object>}
 */
export function loadTasksFromStorage() {
  const storedTasks = localStorage.getItem(STORAGE_KEY);

  if (!storedTasks) {
    const starterTasks = initialTasks.map((task) => ({ ...task }));
    saveTasksToStorage(starterTasks);
    return starterTasks;
  }

  try {
    return JSON.parse(storedTasks);
  } catch (error) {
    console.error("Could not parse stored tasks:", error);
    const fallbackTasks = initialTasks.map((task) => ({ ...task }));
    saveTasksToStorage(fallbackTasks);
    return fallbackTasks;
  }
}
