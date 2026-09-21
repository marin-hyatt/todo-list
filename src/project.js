export class Project {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo) {
    const todoIndex = this.todos.indexOf(todo);
    this.todos.splice(todoIndex, 1);
  }
}
