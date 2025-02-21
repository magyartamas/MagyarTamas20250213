import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
szam1: number = 0;
szam2: number = 0;
result: number = 0;

updateResult(result: number){
  this.result = result
}
}
