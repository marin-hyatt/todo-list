import { Todo } from "./todo-item";

export class Project {
  name: string;
  todos: Todo[];

  constructor(name: string, todos: Todo[]) {
    this.name = name;
    this.todos = todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    const todoIndex = this.todos.indexOf(todo);
    this.todos.splice(todoIndex, 1);
  }
}
