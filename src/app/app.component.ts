import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <button mat-button routerLink="/crisis-center" routerLinkActive="active">About</button>
    <button mat-button>Menu</button>
    <button mat-button>Web Shop</button>
    <button mat-button>Logout</button>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})


export class AppComponent {
/*
  title = 'app';
*/


}
