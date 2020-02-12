import {NgModule} from '@angular/core';
import {TodoComponent} from './todo.component';
import {TodoHeaderComponent} from './components/todo-header/todo-header.component';
import {TodoAddFormComponent} from './components/todo-add-form/todo-add-form.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoListItemComponent} from './components/todo-list-item/todo-list-item.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoAddFormComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule {
}
