/**
 * Creates the DOM structure for a single task card.
 * @param {{ id: number, title: string }} task
 * @returns {HTMLElement}
 */
export function createTaskElement(task) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "task-card";
  card.dataset.taskId = String(task.id);

  const title = document.createElement("h3");
  title.className = "task-title";
  title.textContent = task.title;

  card.appendChild(title);
  return card;
}
