import {ID} from '@datorama/akita';

export interface TodoModel {
  important: boolean;
  done: boolean;
  id: ID;
  label: string;
}

export function createTodoModel(label: string): TodoModel {
  return {
    label,
    important: false,
    done: false,
    id: Math.random().toString()
  };
}
