import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <button  class="primary" mat-button routerLink="/profile" routerLinkActive="active">About</button>
    <button mat-button routerLink="/heroes" routerLinkActive="active">Menu</button>
    <button mat-button routerLink="/web-shop" routerLinkActive="active">Web Shop</button>
    <button mat-button routerLink="/profile" routerLinkActive="active">Logout</button>
    <router-outlet></router-outlet>
  `
})


export class AppComponent {
/*
  title = 'app';
*/
}
