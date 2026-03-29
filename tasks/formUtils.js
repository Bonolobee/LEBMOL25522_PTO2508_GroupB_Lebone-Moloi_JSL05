/**
 * Clears inline validation messages from the task form.
 * @param {Object} elements
 * @returns {void}
 */
export function clearFormErrors(elements) {
  elements.titleError.textContent = "";
  elements.descriptionError.textContent = "";
}

/**
 * Resets the task form back to its default create state.
 * @param {Object} elements
 * @returns {void}
 */
export function resetTaskForm(elements) {
  elements.taskForm.reset();
  elements.taskStatus.value = "todo";
  clearFormErrors(elements);
}

/**
 * Validates the required task form fields and shows inline errors when needed.
 * @param {Object} elements
 * @returns {boolean}
 */
export function validateTaskForm(elements) {
  let isValid = true;

  if (!elements.taskTitle.value.trim()) {
    elements.titleError.textContent = "Please fill out this field.";
    isValid = false;
  }

  if (!elements.taskDescription.value.trim()) {
    elements.descriptionError.textContent = "Please fill out this field.";
    isValid = false;
  }

  return isValid;
}
