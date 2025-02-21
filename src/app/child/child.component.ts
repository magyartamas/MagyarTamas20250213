import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() szam1: number = 0;
@Input() szam2: number = 0;
@Output() result = new EventEmitter<number>();

sendResult(isAdd:boolean) {
  if (isAdd) {
    this.result.emit(this.szam1 + this.szam2); // '+' gomb megnyomása
  } else {
    this.result.emit(this.szam1 - this.szam2); // '-' gomb megnyomása
  }
}
}