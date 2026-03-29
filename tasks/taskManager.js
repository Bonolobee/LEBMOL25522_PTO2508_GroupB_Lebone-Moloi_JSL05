/**
 * Calculates the next available numeric task id from the current task list.
 * @param {Array<{ id: number }>} tasks
 * @returns {number}
 */
function getNextTaskId(tasks) {
  return tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
}

/**
 * Creates a normalized task object from submitted form input.
 * @param {Array<{ id: number }>} tasks
 * @param {{ title: string, description: string, status: string }} taskInput
 * @returns {{ id: number, title: string, description: string, status: string }}
 */
export function createTask(tasks, taskInput) {
  return {
    id: getNextTaskId(tasks),
    title: taskInput.title,
    description: taskInput.description,
    status: taskInput.status,
  };
}
