import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoAddFormComponent } from './todo-add-form/todo-add-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoAddFormComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  providers: [],
  exports: [
      TodoComponent
  ]
})
export class TodoModule { }