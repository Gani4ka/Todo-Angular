import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() todo: TodoModel;
  @Output() onItemClick = new EventEmitter<string>();

  handleItemClick () {
    this.onItemClick.emit(this.todo.id);
  }

  isDone() {
    this.todo.done
  }
}
