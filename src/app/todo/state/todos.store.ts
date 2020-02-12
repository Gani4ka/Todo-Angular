import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {TodoModel} from '../models/todo.model';

export interface TodosState extends EntityState<TodoModel> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'todos'})
export class TodosStore extends EntityStore<TodosState> {

  constructor() {
    super();
  }

}

