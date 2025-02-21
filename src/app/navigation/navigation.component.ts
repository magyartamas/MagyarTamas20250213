import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
 constructor(private router: Router){}
 
 navigateTo(route: string) {
  this.router.navigate([route]);
 }
 
 
}
