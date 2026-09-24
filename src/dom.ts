import { Project } from "./project";
import "./styles.css";
import { Todo, Priorities } from "./todo-item";

export const createProject = (project: Project) => {
  const content = document.querySelector("#content");

  const projectSquare = document.createElement("button");
  projectSquare.textContent = project.name;
  projectSquare.className = "project";

  projectSquare.addEventListener("click", (e) => {
    console.log("event");
    // open project page with todos
    openTodoPage(project, content!);
  });

  // project.todos.forEach((todo) => {
  //   console.log(`todo: ${JSON.stringify(todo)}`);
  //   createTodo(todo, projectSquare);
  // });

  content?.appendChild(projectSquare);
};

const createTodo = (todo: Todo, parent: HTMLDivElement) => {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todoDiv";

  // Add title
  const todoTitle = document.createElement("h1");
  todoTitle.textContent = todo.title;
  todoTitle.className = "todoTitle";

  const todoDescription = document.createElement("p");
  todoDescription.textContent = todo.description;
  todoDescription.className = "todoDescription";

  const todoDueDate = document.createElement("p");
  todoDueDate.textContent = todo.dueDate;
  todoDueDate.className = "todoDueDate";

  const todoPriority = document.createElement("p");
  todoPriority.textContent = "Priority: ";
  switch (todo.priority) {
    case "low":
      todoPriority.textContent += "Low";
      todoPriority.className = "todoPriorityLow";
      break;
    case "medium":
      todoPriority.textContent += "Medium";
      todoPriority.className = "todoPriorityMedium";
      break;
    case "high":
      todoPriority.textContent += "High";
      todoPriority.className = "todoPriorityHigh";
      break;
    default:
      break;
  }

  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoDescription);
  todoDiv.appendChild(todoDueDate);
  todoDiv.appendChild(todoPriority);

  parent.appendChild(todoDiv);
};

const openTodoPage = (project: Project, parent: Element) => {
  const todoPageDiv = document.createElement("div");
  todoPageDiv.className = "todoPageDiv";

  project.todos.forEach((todo) => {
    createTodo(todo, todoPageDiv);
  });

  parent.replaceChildren(todoPageDiv);
};
