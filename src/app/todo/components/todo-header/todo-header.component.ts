import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoHeaderComponent {
  @Input() toDo: number;
  @Input() done: number;

}
