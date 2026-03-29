import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage.js";
import { renderBoard } from "../ui/render.js";
import { setupModalHandlers } from "../ui/modalHandlers.js";
import { createTask, deleteTaskById, updateTask } from "../tasks/taskManager.js";

/**
 * Collects the shared DOM elements used throughout the application.
 * @returns {Object<string, HTMLElement>}
 */
function getDomElements() {
  return {
    board: document.getElementById("board"),
    modalBackdrop: document.getElementById("modalBackdrop"),
    openModalBtn: document.getElementById("openModalBtn"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    taskForm: document.getElementById("taskForm"),
    taskTitle: document.getElementById("taskTitle"),
    taskDescription: document.getElementById("taskDescription"),
    taskStatus: document.getElementById("taskStatus"),
    modalTitle: document.getElementById("modalTitle"),
    submitTaskBtn: document.getElementById("submitTaskBtn"),
    deleteTaskBtn: document.getElementById("deleteTaskBtn"),
    titleError: document.getElementById("titleError"),
    descriptionError: document.getElementById("descriptionError"),
    themeToggle: document.getElementById("themeToggle"),
    sidebar: document.getElementById("sidebar"),
    hideSidebarBtn: document.getElementById("hideSidebarBtn"),
    showSidebarBtn: document.getElementById("showSidebarBtn"),
  };
}

/**
 * Registers the layout interactions such as theme switching and sidebar visibility.
 * @param {ReturnType<typeof getDomElements>} elements
 * @returns {void}
 */
function setupLayoutControls(elements) {
  elements.themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  elements.hideSidebarBtn.addEventListener("click", () => {
    elements.sidebar.classList.add("hidden-sidebar");
    elements.showSidebarBtn.classList.remove("hidden");
  });

  elements.showSidebarBtn.addEventListener("click", () => {
    elements.sidebar.classList.remove("hidden-sidebar");
    elements.showSidebarBtn.classList.add("hidden");
  });
}

/**
 * Starts the application by loading tasks, rendering the board, and wiring the modules together.
 * @returns {void}
 */
function initTaskBoard() {
  const elements = getDomElements();
  let tasks = loadTasksFromStorage();

  /**
   * Re-renders the current task state into the board columns.
   * @returns {void}
   */
  function render() {
    renderBoard(tasks, elements.board);
  }

  setupModalHandlers(elements, {
    getTaskById(taskId) {
      return tasks.find((task) => task.id === taskId) ?? null;
    },
    onCreateTask(taskInput) {
      const newTask = createTask(tasks, taskInput);
      tasks = [...tasks, newTask];
      saveTasksToStorage(tasks);
      render();
    },
    onUpdateTask(taskId, taskInput) {
      tasks = updateTask(tasks, taskId, taskInput);
      saveTasksToStorage(tasks);
      render();
    },
    onDeleteTask(taskId) {
      tasks = deleteTaskById(tasks, taskId);
      saveTasksToStorage(tasks);
      render();
    },
  });

  setupLayoutControls(elements);
  render();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
