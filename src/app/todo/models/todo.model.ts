export class TodoModel {
    important = false
    done = false;
    id = Math.random().toString()
    constructor(public label: string) {}
  }