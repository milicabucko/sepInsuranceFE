import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';


import {FormsModule} from '@angular/forms';
import {ContractItem} from '../travel-insurance/ContractItem';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  say: Number;

  firstName = 'Milica';

  ngOnInit() {
  }

  findAllContractItems() {
    this.dataService.findAllContractItems('sport').then(items => this.say = items.length);
  }


}
