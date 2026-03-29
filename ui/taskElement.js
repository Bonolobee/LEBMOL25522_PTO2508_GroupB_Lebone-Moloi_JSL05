/**
 * Creates the DOM structure for a single task card.
 * @param {{ title: string }} task
 * @returns {HTMLElement}
 */
export function createTaskElement(task) {
  const card = document.createElement("article");
  card.className = "task-card";

  const title = document.createElement("h3");
  title.className = "task-title";
  title.textContent = task.title;

  card.appendChild(title);
  return card;
}
