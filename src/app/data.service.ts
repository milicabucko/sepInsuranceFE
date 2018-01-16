import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ContractItem} from './travel-insurance/ContractItem';

@Injectable()
export class DataService {

  private helloUrl = 'hello';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  findAllContractItems(itemName: String): Promise<ContractItem[]> {
    const url = 'contract/items/findAll/' + itemName;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
