// Set up todo list

import { createProject } from "./dom";
import { Project } from "./project";
import { Todo } from "./todo-item";

const defaultTodo = new Todo(
  "Default Todo Item",
  "Test description",
  "test due date",
  "low",
);
const defaultProject = new Project("First project", [defaultTodo]);
createProject(defaultProject);
