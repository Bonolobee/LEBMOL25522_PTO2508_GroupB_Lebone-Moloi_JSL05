import { clearFormErrors, resetTaskForm, validateTaskForm } from "../tasks/formUtils.js";

/**
 * Opens the add-task modal and focuses the title field.
 * @param {Object} elements
 * @returns {void}
 */
function openModal(elements) {
  elements.modalBackdrop.classList.remove("hidden");
  elements.taskTitle.focus();
}

/**
 * Closes the add-task modal and resets it back to its default state.
 * @param {Object} elements
 * @returns {void}
 */
function closeModal(elements) {
  elements.modalBackdrop.classList.add("hidden");
  resetTaskForm(elements);
}

/**
 * Registers the modal open, close, validation, and submit handlers.
 * @param {Object} elements
 * @param {{ onCreateTask: (taskInput: {title: string, description: string, status: string}) => void }} handlers
 * @returns {void}
 */
export function setupModalHandlers(elements, handlers) {
  elements.openModalBtn.addEventListener("click", () => {
    openModal(elements);
  });

  elements.closeModalBtn.addEventListener("click", () => {
    closeModal(elements);
  });

  elements.modalBackdrop.addEventListener("click", (event) => {
    if (event.target === elements.modalBackdrop) {
      closeModal(elements);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.modalBackdrop.classList.contains("hidden")) {
      closeModal(elements);
    }
  });

  elements.taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFormErrors(elements);

    if (!validateTaskForm(elements)) {
      return;
    }

    handlers.onCreateTask({
      title: elements.taskTitle.value.trim(),
      description: elements.taskDescription.value.trim(),
      status: elements.taskStatus.value,
    });

    closeModal(elements);
  });
}
