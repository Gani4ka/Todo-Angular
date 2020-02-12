import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {TodosState, TodosStore} from './todos.store';

@Injectable({providedIn: 'root'})
export class TodosQuery extends QueryEntity<TodosState> {
  doneCount = this.selectCount((todo): boolean => todo.done);
  todoCount = this.selectCount((todo): boolean => !todo.done);

  constructor(protected store: TodosStore) {
    super(store);
  }

}
