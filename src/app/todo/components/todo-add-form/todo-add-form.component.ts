import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddFormComponent {

  @Output() onFormSubmit = new EventEmitter<string>();

  inputValue = '';

  handleChange (e) {
    this.inputValue = e.target.value;
  }

  handleSubmit (e) {
    e.preventDefault();
    this.onFormSubmit.emit(this.inputValue);
    this.inputValue = '';
  }
}
