import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import { TodoModel } from "../../models/todo.model";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent {
  @Input() todo: TodoModel;
  @Output() onItemClick = new EventEmitter<void>();
  @Output() onImportantClick = new EventEmitter<void>();
  @Output() onDeleteClick = new EventEmitter<void>();

  handleItemClick() {
    this.onItemClick.emit();
  }

  handleImportantClick() {
    this.onImportantClick.emit();
  }

  handleDeleteClick() {
    this.onDeleteClick.emit();
  }
}
