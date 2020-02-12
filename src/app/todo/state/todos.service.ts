import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {TodosStore} from './todos.store';
import {createTodoModel, TodoModel} from '../models/todo.model';

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private todosStore: TodosStore) {
  }

  add(label: string) {
    this.todosStore.add(createTodoModel(label));
  }

  toggleDone(todo: TodoModel) {
    this.todosStore.update(todo.id, {done: !todo.done});
  }

  toggleImportant(todo: TodoModel) {
    this.todosStore.update(todo.id, {important: !todo.important});
  }

  remove(id: ID) {
    this.todosStore.remove(id);
  }
}
