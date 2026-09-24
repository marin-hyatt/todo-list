export type Priorities = {
  LOW: "low";
  MEDIUM: "medium";
  HIGH: "high";
};

export class Todo {
  title: string;
  description: string;
  dueDate: string;
  priority: Priorities[keyof Priorities];

  constructor(
    title: string,
    description: string,
    dueDate: string,
    priority: Priorities[keyof Priorities],
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
