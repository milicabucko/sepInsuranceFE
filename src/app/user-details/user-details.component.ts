import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';


import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  say: String;

  firstName = 'Milica';

  ngOnInit() {
  }

  sayHello() {
    this.say = 'Mici';
    this.dataService.sayHello().then(hello => this.say = hello);
  }

}
