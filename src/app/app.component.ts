import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

//template: `
//<button  class="primary" mat-button routerLink="/profile" routerLinkActive="active">About</button>
//<button mat-button routerLink="/heroes">Menu</button>
//<button mat-button routerLink="/web-shop" >Web Shop</button>
//<button mat-button routerLink="/profile">Logout</button>
//<button mat-button routerLink="/pricelist">Pricelist</button>
//<div class="outer-outlet">
//<router-outlet></router-outlet>
//</div>
//`

export class AppComponent {


  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
      'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPopqXeuO7fqot51N7vaZuh9EqBYgZkLexcmQ_A0Fy0CjjW6J',
   
    ];
  }

}
