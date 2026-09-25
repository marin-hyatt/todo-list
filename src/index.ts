// Set up todo list

import { createProject, createProjectGrid } from "./dom";
import { Project } from "./project";
import { Todo } from "./todo-item";

const defaultTodo = new Todo(
  "Default Todo Item",
  "Test description",
  "test due date",
  "low",
);
const defaultProject = new Project("First project", [defaultTodo]);

// DOM stuff
// Add Home button functionality
const homeBtn = document.querySelector(".home");
homeBtn?.addEventListener("click", (e: Event) => {
  console.log("creating project grid");
  createProjectGrid([defaultProject]);
});

createProjectGrid([defaultProject]);
