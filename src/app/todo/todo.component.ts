import { Component } from "@angular/core";
import { TodoModel } from "./models/todo.model";

const initialState: TodoModel[] = [
  {
    label: "1",
    important: false,
    done: false,
    id: "i1"
  },
  {
    label: "2",
    important: false,
    done: false,
    id: "i2"
  },
  {
    label: "3",
    important: false,
    done: false,
    id: "i3"
  }
];

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  todos = initialState;

  get doneCount(): number {
    return this.todos.filter((el: TodoModel) => el.done).length;
  }

  get todoCount(): number {
    return this.todos.length - this.doneCount;
  }

  formHandler(data: string): void {
    const newItem = new TodoModel(data);
    this.todos = [...this.todos, newItem];
  }

  itemHandler(data: string): void {
    this.todos.map(item => {
      if (item.id === data) {
        item.done = !item.done;
      }
    });
  }

  importantHandler(data: string): void {
    this.todos.map(item => {
      if (item.id === data) {
        item.important = !item.important;
      }
    });
  }

  deleteHandler(data: string): void {
    this.todos = this.todos.filter(item => item.id !== data);
  }
}
