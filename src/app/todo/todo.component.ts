import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoModel} from './models/todo.model';
import {TodosQuery} from './state/todos.query';
import {TodosService} from './state/todos.service';
import {ID} from '@datorama/akita';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  todos = this.todosQuery.selectAll();
  doneCount = this.todosQuery.doneCount;
  todoCount = this.todosQuery.todoCount;

  constructor(
    private todosQuery: TodosQuery,
    private todosService: TodosService
  ) {
  }

  formHandler(label: string): void {
    this.todosService.add(label);
  }

  itemHandler(item: TodoModel): void {
    this.todosService.toggleDone(item);
  }

  importantHandler(item: TodoModel): void {
    this.todosService.toggleImportant(item);
  }

  deleteHandler(id: ID): void {
    this.todosService.remove(id);
  }

  trackById(index: number, item: TodoModel): ID {
    return item.id;
  }
}
