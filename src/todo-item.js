export class Todo {
  static priorities = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
  };

  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
