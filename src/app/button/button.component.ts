import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  private counter = 0;

  @Input() label: string;
  @Output() onBtnClick = new EventEmitter<number>()

  handleClick () {
    this.counter++;
    this.onBtnClick.emit(this.counter);
  }
}
